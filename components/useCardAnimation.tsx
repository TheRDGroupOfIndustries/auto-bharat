import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useCardAnimation = (selector: string) => {
    useEffect(() => {
        const cards = gsap.utils.toArray(selector);
        const spacing = 0.1;
        const snap = gsap.utils.snap(spacing);

        const seamlessLoop = buildEffect(cards as HTMLElement[], spacing);

        const scrub = gsap.to(seamlessLoop, {
            totalTime: 0,
            duration: 0.5,
            ease: 'power3',
            paused: true,
        });

        ScrollTrigger.create({
            trigger: selector,
            start: 'top top',
            end: () => `+=3000`,
            pin: selector,
            onUpdate: (self) => {
                scrub.vars.totalTime = snap(self.progress * seamlessLoop.duration());
                scrub.invalidate().restart();
            },
        });
    }, [selector]);
};

const buildEffect = (items: HTMLElement[], spacing: number) => {
    const rawSequence = gsap.timeline({ paused: true });
    const cardsVisible = 3;
    const cardDuration = 2 * spacing;

    items.forEach((item, i) => {
        const time = i * spacing;
        rawSequence
            .fromTo(item, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: cardDuration, yoyo: true, repeat: 1 }, time)
            .fromTo(item, { xPercent: 400 }, { xPercent: -400, duration: cardDuration * 2, ease: 'none' }, time);
    });

    return gsap.timeline({ paused: true }).to(rawSequence, {
        time: items.length * spacing,
        duration: items.length * spacing,
        ease: 'none',
    });
};

export default useCardAnimation;
