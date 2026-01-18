"use client";

import { motion } from "framer-motion";

// Анимированная иконка лупы (Прозрачность)
export function AnimatedMagnifyingGlass() {
  return (
    <div className="flex items-center justify-center mb-4">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="10"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-neutral-700"
          />
          <motion.path
            d="M28 28L35 35"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-neutral-700"
            animate={{
              pathLength: [0, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Анимированная иконка графика (Масштабируемость)
export function AnimatedChart() {
  return (
    <div className="flex items-center justify-center mb-4">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Оси */}
          <line
            x1="8"
            y1="40"
            x2="40"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
            className="text-neutral-300"
          />
          <line
            x1="8"
            y1="40"
            x2="8"
            y2="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-neutral-300"
          />
          {/* Линия графика */}
          <motion.path
            d="M 12 32 L 18 28 L 24 20 L 30 16 L 36 8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="text-red-500"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Точки на графике */}
          {[
            { x: 12, y: 32 },
            { x: 18, y: 28 },
            { x: 24, y: 20 },
            { x: 30, y: 16 },
            { x: 36, y: 8 },
          ].map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="currentColor"
              className="text-red-500"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

// Анимированная иконка глобуса (Международность)
export function AnimatedGlobe() {
  return (
    <div className="flex items-center justify-center mb-4">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Глобус - круг */}
          <circle
            cx="24"
            cy="24"
            r="16"
            stroke="currentColor"
            strokeWidth="2"
            className="text-neutral-700"
          />
          {/* Горизонтальные линии (параллели) */}
          <motion.ellipse
            cx="24"
            cy="16"
            rx="12"
            ry="4"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-blue-500"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.ellipse
            cx="24"
            cy="24"
            rx="14"
            ry="5"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-blue-500"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
              ease: "easeInOut",
            }}
          />
          <motion.ellipse
            cx="24"
            cy="32"
            rx="12"
            ry="4"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-blue-500"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Вертикальная линия (меридиан) */}
          <motion.path
            d="M 24 8 Q 32 16 32 24 Q 32 32 24 40"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-green-500"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
