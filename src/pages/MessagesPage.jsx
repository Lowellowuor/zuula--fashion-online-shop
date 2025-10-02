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
  Search,
  Filter,
  MoreVertical,
} from "lucide-react";

const MessagesPage = () => {
  const [conversations] = useState([
    { 
      id: 1, 
      name: "Sarah K.", 
      item: "Red Wedding Gown", 
      unread: 2, 
      premium: true,
      lastMessage: "Hi, is the wedding gown available for next weekend?",
      time: "10:32 AM",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    { 
      id: 2, 
      name: "Mike L.", 
      item: "Office Blazer", 
      unread: 0, 
      premium: false,
      lastMessage: "Thanks for the quick response!",
      time: "Yesterday",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    { 
      id: 3, 
      name: "Anna P.", 
      item: "Bridal Party Dresses", 
      unread: 1, 
      premium: true,
      lastMessage: "Can we schedule a viewing?",
      time: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    { 
      id: 4, 
      name: "David M.", 
      item: "Traditional Gomesi", 
      unread: 0, 
      premium: false,
      lastMessage: "The outfit was perfect, thank you!",
      time: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
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
    {
      id: 4,
      sender: "them",
      text: "That's wonderful! Can we schedule for Friday afternoon?",
      time: "10:42 AM",
      read: true,
    },
    {
      id: 5,
      sender: "me",
      text: "Friday at 3 PM works perfectly. I'll send you the location details.",
      time: "10:45 AM",
      read: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary-800">Messages</h1>
              <p className="text-sm text-text-muted mt-1">Connect with clients and manage rental conversations</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary flex items-center gap-2">
                <Filter size={16} />
                Filter
              </button>
              <button className="px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary flex items-center gap-2">
                <MoreVertical size={16} />
                More
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Conversations Sidebar */}
            <div className="lg:col-span-1 premium-card !p-0 overflow-hidden">
              {/* Search Bar */}
              <div className="p-4 border-b border-background-300">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-background-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-background-50"
                  />
                </div>
              </div>

              {/* Conversations List */}
              <div className="max-h-[600px] overflow-y-auto">
                {filteredConversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`p-4 cursor-pointer border-b border-background-200 transition-all duration-300 ${
                      activeChat.id === conv.id 
                        ? "bg-primary-50 border-l-4 border-l-accent" 
                        : "hover:bg-background-100"
                    }`}
                    onClick={() => setActiveChat(conv)}
                  >
                    <div className="flex gap-3">
                      <img
                        src={conv.avatar}
                        alt={conv.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-background-300"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="font-semibold text-text-primary truncate">{conv.name}</div>
                          {conv.premium && (
                            <Crown size={14} className="text-accent fill-current flex-shrink-0" />
                          )}
                        </div>
                        <div className="text-sm text-text-muted truncate mb-1">
                          {conv.lastMessage}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-text-muted">{conv.time}</div>
                          {conv.unread > 0 && (
                            <span className="bg-accent text-primary-900 text-xs font-semibold px-2 py-1 rounded-full shadow-sm min-w-[20px] text-center">
                              {conv.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-3 premium-card !p-0 overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-background-300 bg-background-50">
                <div className="flex items-center gap-3">
                  <img
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-background-300"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold text-text-primary text-lg">
                        {activeChat.name}
                      </h2>
                      {activeChat.premium && (
                        <span className="bg-gradient-to-r from-accent to-brass text-primary-900 text-xs px-2 py-1 rounded-full font-semibold">
                          Premium Client
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-text-muted">
                      Discussing: <span className="text-primary-600 font-medium">{activeChat.item}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span className="text-sm text-text-muted">Online</span>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-[400px] p-6 overflow-y-auto space-y-4 bg-background-50 bg-opacity-50">
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
              <div className="flex space-x-3 p-4 border-t border-background-300 bg-background-50">
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
              <div className="flex items-center p-4 border-t border-background-300 bg-white">
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="premium-card !p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-text-muted">Active Conversations</p>
              </div>
              <h2 className="text-2xl font-bold text-primary-700">12</h2>
              <p className="text-xs text-text-muted mt-2">This week</p>
            </div>
            
            <div className="premium-card !p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ShoppingBag className="w-5 h-5 text-accent-600" />
                <p className="text-sm text-text-muted">Bookings via Chat</p>
              </div>
              <h2 className="text-2xl font-bold text-accent-700">8</h2>
              <p className="text-xs text-text-muted mt-2">This month</p>
            </div>
            
            <div className="premium-card !p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Crown className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-text-muted">Premium Clients</p>
              </div>
              <h2 className="text-2xl font-bold text-primary-700">5</h2>
              <p className="text-xs text-text-muted mt-2">Active now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;