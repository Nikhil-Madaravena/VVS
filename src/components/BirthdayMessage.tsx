import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const paragraphs = [
  `Happy Birthday to the most prettiest cutest and the sweetest bestfriend of mine. You thinkin who it is ? It is YOU 💖. Eversince the day you came into my life alot of things have changed for good. You are the reason that I started to talk alot with people openly. You made an introverted person like me into a completely extroverted person. It is you that made my relation with my sister even better. If not for you I would have not been anywhere near to where I am right now.`,
  
  `I want to apologize to you Mythili. The things that happened between us still haunts me everytime. Those stupid fights shouldnt be between us. It has to be like You and Me against the problem not You vs Me. I am really sorry nenu aa roju ala andari mundhu aravakunda undalsindhi Mythili.`,
  
  `We are not on talking terms right now Mythili but remember one thing whatever you think of me nenu ni frnd anukunna frnd kaadhu anukunna kaani I always look at you as a small child who is still learning how to get better in life.`,
  
  `Anytime you need a shoulder to cry on ? I AM HERE.<br>Anytime you are feeling low ? I AM HERE.<br>Anytime you need to talk ? I AM HERE.`,
  
  `Thank you soo much Mythili for coming into my life and adding the colors to my life without you even realising that you have done so much. You have healed something that you haven’t hurt and even after I got hurt with you, you were there with me and I am sure that things will get better with us eventually as it takes some time.`,
  
  `JUST REMEMBER MYTHILI<br>I AM HERE,<br>I AM HARSHITH VARANASI.`
];

const BirthdayMessage = () => {
  const typedRef = useRef(null);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [key, setKey] = useState(0); // key for forcing re-render of span

  useEffect(() => {
    if (paragraphIndex >= paragraphs.length) return;

    const typed = new Typed(typedRef.current, {
      strings: [paragraphs[paragraphIndex]],
      typeSpeed: 10, // very fast typing
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          typed.destroy();
          setParagraphIndex(prev => prev + 1);
          setKey(prev => prev + 1); // force new span on next render
        }, 7000); // 30 seconds pause
      }
    });

    return () => typed.destroy();
  }, [paragraphIndex]);

  return (
    <div className="backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg max-w-2xl w-full text-gray-700 font-poppins text-lg leading-relaxed min-h-[200px] flex items-center justify-center text-center">
      <span key={key} ref={typedRef} />
    </div>
  );
};

export default BirthdayMessage;
