'use client';

import { useState } from 'react';

/**
 * 一个简单的点击复制按钮组件
 * @param text - 要复制到剪贴板的文本
 * @param label - 按钮显示的标签
 */
export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // 优先尝试现代 Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // 兼容非 HTTPS 或旧版浏览器的 fallback 方案
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // 确保 textarea 在移动端不会引起页面跳动或滚动
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (!successful) throw new Error('execCommand copy failed');
      }
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('复制失败，请手动选择文本复制');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
        copied 
          ? 'bg-green-500 text-white' 
          : 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/30'
      }`}
    >
      {copied ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          已复制!
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          {label}
        </>
      )}
    </button>
  );
}
