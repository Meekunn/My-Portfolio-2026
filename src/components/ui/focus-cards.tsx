"use client";

import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { CloseIcon } from "@/components/expandable-card-demo-standard";
import { LinkPreview } from "@/components/ui/link-preview";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useIsLargeScreen } from "@/hooks/use-is-large-screen";
import "@/styles/styles.css"

type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onView,
    isInView
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onView: (card: Card) => void;
    isInView: boolean;
  }) => {
    const isLargeScreen = useIsLargeScreen()

    const cardVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: isLargeScreen ? custom * 1.1 : custom * 1.5,
        }
      })
    };

    return (
    <motion.div
      custom={card.id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group rounded-xl relative bg-gray-200 overflow-hidden shadow-xl border border-gray-200 w-full transition-all duration-300 ease-out max-h-[420px]",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover inset-0"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
          {card.title}
        </h3>
        <p className="text-sm lg:text-base text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {card.description}
        </p>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-center justify-center py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <motion.button
          onClick={() => onView(card)}
          className="group relative px-4 py-2 md:px-8 bg-white backdrop-blur-md rounded-full font-semibold border-2 border-white/20 hover:border-purple-400 shadow-2xl overflow-hidden contact-button text-black hover:text-white"
          transition={{ 
            scale: { duration: 0.2, type: "spring", stiffness: 400 }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 text-sm ">View</span>
        </motion.button>
      </div>
    </motion.div>
  )}
);

export function FocusCards({ cards, isInView }: { cards: Card[], isInView: boolean }) {
  const isLargeScreen = useIsLargeScreen();
  const initialCount = isLargeScreen ? 6 : 3;
  
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? cards : cards.slice(0, initialCount);
  const hasMore = cards.length > initialCount;
  
  useOutsideClick(modalRef, () => {
    if (selectedCard) {
      setSelectedCard(null);
    }
  });

  return (
    <>
      {/* Expandable card modal */}
      {createPortal(
        <AnimatePresence>
          {selectedCard && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ease: 'easeInOut'}}
                className="fixed inset-0 bg-black/40 h-full w-full z-40"
              />
              <div className="fixed inset-0 grid place-items-center z-50 pointer-events-none">
                <motion.div
                  ref={modalRef}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-[380px] lg:w-full max-w-[500px] max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-xl sm:rounded-3xl overflow-hidden pointer-events-auto "
                >
                  <button
                    className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-6 w-6 z-10"
                    onClick={() => setSelectedCard(null)}
                  >
                    <CloseIcon />
                  </button>
                  <div className="w-full h-64 md:h-80 overflow-hidden">
                    <img
                      src={selectedCard.image}
                      alt={selectedCard.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-neutral-700 dark:text-neutral-200 text-lg md:text-xl">
                          {selectedCard.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mt-1 h-[130px] overflow-y-scroll">
                          {selectedCard.description}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <LinkPreview
                          url={selectedCard.github}
                          className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 shadow-lg hover:scale-110 hover:border hover:border-purple-300"
                          
                        >
                          <FiGithub className="w-4 h-4" />
                        </LinkPreview>
                        {selectedCard.demo && (
                          <LinkPreview
                          url={selectedCard.demo}
                          className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-purple-600 shadow-lg hover:scale-110 hover:border hover:border-purple-300"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </LinkPreview>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedCard.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-purple-300 bg-purple-50 text-purple-700 rounded-full text-xs font-medium shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body // ✅ renders outside all section stacking contexts
      )}
      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
        {visibleCards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onView={setSelectedCard}
            isInView={isInView}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6 lg:mt-10">
          <motion.button
            onClick={() => setShowAll(prev => !prev)}
            className="px-4 py-3 flex relative text-base rounded-full font-semibold border border-purple-500 text-purple-500 overflow-hidden hover:border-purple-600 hover:text-white   transition-all delay-100 duration-300 load-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Show Less" : "Load More"}
          </motion.button>
        </div>
      )}
    </>
  );
}
