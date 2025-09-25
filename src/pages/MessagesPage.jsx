// src/pages/MessagesPage.jsx
import React, { useState, useEffect } from "react";
import {
  Send,
  Check,
  CheckCheck,
  Image,
  ShoppingBag,
  Calendar,
  Heart,
  Crown,
  Sparkles,
} from "lucide-react";

const MessagesPage = () => {
  const [conversations] = useState([
    { id: 1, name: "Sarah K.", item: "Red Wedding Gown", unread: 2, premium: true },
    { id: 2, name: "Mike L.", item: "Office Blazer", unread: 0, premium: false },
    { id: 3, name: "Anna P.", item: "Bridal Party Dresses", unread: 1, premium: true },
  ]);

  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "them",
      text: "Hi, is the wedding gown available for next weekend?",
      time: "10:32 AM",
      read: true,
    },
    {
      id: 2,
      sender: "me",
      text: "Yes, it's available for rent! Would you like to schedule a fitting? 💍✨",
      time: "10:34 AM",
      read: true,
    },
    {
      id: 3,
      sender: "system",
      text: "Your rental request has been accepted 🎉",
      time: "10:40 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeout;
    if (typing) {
      timeout = setTimeout(() => setTyping(false), 1500);
    }
    return () => clearTimeout(timeout);
  }, [typing]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "me",
        text: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        read: false,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-background-100">
      {/* Sidebar */}
      <div className="w-80 border-r border-background-300 bg-background-50/80 backdrop-blur-md shadow-lg overflow-y-auto">
        <div className="p-6 border-b border-background-200">
          <h1 className="text-2xl font-bold text-primary-700 font-heading flex items-center gap-2">
            <Heart className="text-accent" size={24} />
            Messages
          </h1>
          <p className="text-text-muted text-sm mt-1">Connect with clients and manage rentals</p>
        </div>
        
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`p-4 cursor-pointer border-b border-background-200 transition-all duration-300 ${
              activeChat.id === conv.id 
                ? "bg-primary-50 border-l-4 border-l-accent" 
                : "hover:bg-background-100"
            }`}
            onClick={() => setActiveChat(conv)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="font-medium text-text-primary">{conv.name}</div>
                  {conv.premium && (
                    <Crown size={14} className="text-accent fill-current" />
                  )}
                </div>
                <div className="text-sm text-text-muted truncate">
                  About: <span className="italic">{conv.item}</span>
                </div>
              </div>
              {conv.unread > 0 && (
                <span className="bg-accent text-primary-900 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  {conv.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-background-300 bg-background-50/90 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-semibold text-text-primary text-lg font-heading">
                {activeChat.name}
              </h2>
              {activeChat.premium && (
                <span className="bg-gradient-to-r from-accent to-brass text-primary-900 text-xs px-2 py-1 rounded-full font-semibold">
                  Premium Client
                </span>
              )}
            </div>
            <div className="text-sm text-text-muted mt-1">
              Discussing: <span className="text-primary-600 font-medium">{activeChat.item}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-xs text-text-muted">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-background-50 bg-opacity-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-2xl max-w-md shadow-sm border ${
                  msg.sender === "me"
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-br-none border-primary-400"
                    : msg.sender === "system"
                    ? "bg-accent-100 text-primary-900 text-sm italic mx-auto border border-accent-200"
                    : "bg-white text-text-primary rounded-bl-none border-background-300"
                }`}
              >
                <div className="flex items-start gap-2">
                  {msg.sender === "system" && <Sparkles size={16} className="text-accent mt-0.5 flex-shrink-0" />}
                  <div className="flex-1">
                    {msg.text}
                    {msg.sender !== "system" && (
                      <div className={`text-xs mt-2 flex justify-end items-center space-x-1 ${
                        msg.sender === "me" ? "text-primary-100" : "text-text-muted"
                      }`}>
                        <span>{msg.time}</span>
                        {msg.sender === "me" &&
                          (msg.read ? (
                            <CheckCheck size={12} className="text-accent-300" />
                          ) : (
                            <Check size={12} />
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {typing && (
            <div className="flex justify-start">
              <div className="bg-background-200 text-text-muted text-sm italic px-4 py-3 rounded-2xl rounded-bl-none border">
                <div className="flex items-center gap-2">
                  <span>Typing</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-3 p-4 border-t border-background-300 bg-background-50/90 backdrop-blur-md">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg shadow-sm hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-0.5">
            <Calendar size={16} /> 
            <span>Schedule Fitting</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-accent to-brass text-primary-900 px-4 py-2 rounded-lg shadow-sm hover:from-accent-600 hover:to-accent-800 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">
            <ShoppingBag size={16} /> 
            <span>Confirm Rental</span>
          </button>
        </div>

        {/* Message Input */}
        <div className="flex items-center p-4 border-t border-background-300 bg-white/90 backdrop-blur-md">
          <button className="p-3 text-text-muted hover:text-accent transition-colors duration-300 hover:bg-background-100 rounded-lg">
            <Image size={20} />
          </button>
          <div className="flex-1 mx-3">
            <input
              type="text"
              className="w-full p-3 border border-background-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background-50 transition-all duration-300"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
                setTyping(true);
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
          </div>
          <button
            className="bg-gradient-to-r from-accent to-brass text-primary-900 p-3 rounded-xl hover:from-accent-600 hover:to-accent-800 hover:text-white shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            onClick={sendMessage}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;