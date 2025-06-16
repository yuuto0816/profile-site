"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

type AppWrapperProps = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  // 2つの条件を管理するための状態
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // 条件1: 最低でも2.5秒はアニメーションを見せるためのタイマー
    const timer = setTimeout(() => {
      setIsTimerFinished(true);
    }, 2500);

    // 条件2: 背景画像を裏側で読み込む
    const img = new Image();
    img.src = '/images/background.jpg';
    img.onload = () => {
      setIsImageLoaded(true);
    };

    // 画像読み込みに失敗した場合もタイマーで進める
    img.onerror = () => {
      setIsImageLoaded(true); 
    };

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  // 両方の条件が満たされたらローディングを完了とする
  const isLoading = !isTimerFinished || !isImageLoaded;

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* この部分はローディング完了後に表示される */}
      {!isLoading && (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppWrapper;