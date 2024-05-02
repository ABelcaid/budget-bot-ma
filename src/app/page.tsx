"use client";

import React, { useState } from "react";
import chatBotSvg from "../../public/chat-bot.svg";
import profileSvg from "../../public/profile.svg";
import { Message, useAssistant } from "ai/react";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const roleAvatarMap: Record<Message["role"], string> = {
  user: profileSvg,
  assistant: chatBotSvg,
  function: "",
  system: "",
  data: "",
  tool: "",
};

export default function Home() {
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: "/api/assistant" });

  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div>
      {isChatVisible && (
        <div className="fixed p-1 bottom-[calc(4rem+1.5rem)] md:right-2  lg:right-4 w-full h-4/6 md:max-w-[440px] md:w-{400}  bg-white border border-[#e5e7eb] shadow-lg rounded-t-lg lg:rounded-lg flex flex-col overflow-hidden lg:overflow-visible">
          <div className="flex flex-col space-y-1.5 p-4 pb-6">
            <h2 className="font-semibold text-lg tracking-tight">
              BudgetBot MA
            </h2>
            <p className="text-sm text-[#6b7280] leading-3">
              Powered by Open AI Assistant and Vercel
            </p>
          </div>

          <div className="p-1  ml-1 overflow-auto" style={{ height: "474px" }}>
            <div className="my-4 text-gray-600 text-sm">
              {messages.map((m: Message) => (
                <div key={m.id} className="flex gap-3 mt-3">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-9 h-9">
                    <Image
                      width={25}
                      height={25}
                      src={roleAvatarMap[m.role]}
                      alt={""}
                    />
                  </span>
                  <p className="leading-relaxed ">
                    <span className="block font-bold text-gray-700">
                      {m.role}
                    </span>
                    {m.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2">
            <form
              onSubmit={submitMessage}
              className="flex items-center justify-center w-full space-x-2"
            >
              <input
                disabled={status !== "awaiting_message"}
                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                placeholder="Type your message"
                value={input}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      )}

      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isChatVisible ? "true" : "false"}
        data-state={isChatVisible ? "open" : "closed"}
        onClick={toggleChatVisibility}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>
    </div>
  );
}
