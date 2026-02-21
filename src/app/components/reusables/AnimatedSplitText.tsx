import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
}

const AnimatedSplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  style,
  as: Component = 'h1',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      document.fonts.ready.then(() => {
        gsap.set(textRef.current, { opacity: 1, });

        let split;
        SplitText.create(textRef.current, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
          onSplit: (self) => {
            split = gsap.from(self.lines, {
              duration: 1.5,
              delay: 0,
              yPercent: 100,
              opacity: 0,
              stagger: 0.1,
              ease: "expo.out",
            });
            return split;
          }
        });
      });
    },
    {
      scope: containerRef,
      dependencies: [text],
    }
  );

  return (
    <div ref={containerRef}>
      <Component
        ref={textRef}
        className={`${className} opacity-0`}
        style={style}
      >
        {text}
      </Component>
    </div>
  );
};

export default AnimatedSplitText