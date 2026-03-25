/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  ShieldCheck, 
  Users,
  MessageCircle,
  X
} from "lucide-react";

export default function App() {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navyBlue = "#000080";
  const electricBlue = "#0000FF";

  const terms = [
    "আমাদের দেওয়া অফিসিয়াল রেফারেল লিঙ্ক ব্যবহার করে নতুন একটি একাউন্ট তৈরি করতে হবে।",
    "একাউন্টটি একটিভ করতে এবং কাজ শুরু করতে সর্বনিম্ন ৫০০ টাকা ডিপোজিট করতে হবে।",
    "একাউন্ট খোলার পর আপনার ইউজারনেম এবং ডিপোজিটের স্ক্রিনশট আমাদের টেলিগ্রামে পাঠাতে হবে।",
    "সিগন্যাল অনুযায়ী খেলার মানসিকতা থাকতে হবে, কোনো প্রকার তাড়াহুড়ো করা যাবে না।",
    "শুধুমাত্র আমাদের রেফারেল ইউজাররাই আমাদের প্রিমিয়াম ফ্রি সিগন্যাল গ্রুপে যুক্ত হতে পারবেন।",
    "গেমের রিস্ক ম্যানেজমেন্ট এবং আমাদের দেওয়া সকল টিপস অবশ্যই ফলো করতে হবে।",
    "আমাদের দেওয়া হ্যাক বা সিক্রেট সিগন্যাল অন্য কোথাও শেয়ার করা সম্পূর্ণ নিষেধ।",
    "একই ডিভাইসে একের অধিক একাউন্ট করা যাবে না, অন্যথায় আইডি ব্যান হওয়ার ঝুঁকি থাকে।",
    "যেকোনো প্রয়োজনে বা সমস্যায় সরাসরি আমাদের টেলিগ্রাম সাপোর্টে যোগাযোগ করতে হবে।",
    "নিয়মিত প্রফিট করার জন্য আমাদের অফিশিয়াল চ্যানেলের আপডেটগুলো ফলো করতে হবে।"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* Terms Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTermsModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <h3 className="text-xl font-bold text-slate-900">শর্তাবলি ও নিয়মাবলী (Terms & Conditions)</h3>
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="max-h-[70vh] overflow-y-auto p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">১. সাধারণ নিয়মাবলী</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      মুসা প্রফিট হাব (Mussa Profit Hub) একটি অনলাইন ইনকাম গাইডলাইন প্ল্যাটফর্ম। আমাদের সেবা গ্রহণ করার মাধ্যমে আপনি আমাদের সকল শর্তাবলি মেনে নিচ্ছেন বলে গণ্য হবে।
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">২. একাউন্ট ও ডিপোজিট</h4>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                      <li>অবশ্যই আমাদের অফিসিয়াল রেফারেল লিঙ্কের মাধ্যমে একাউন্ট করতে হবে।</li>
                      <li>একাউন্ট একটিভ করতে সর্বনিম্ন ৫০০ টাকা ডিপোজিট করা বাধ্যতামূলক।</li>
                      <li>ডিপোজিট সংক্রান্ত কোনো ভুলের জন্য মুসা প্রফিট হাব দায়ী থাকবে না।</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">৩. সিগন্যাল ও গাইডলাইন</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      আমাদের দেওয়া সিগন্যালগুলো অভিজ্ঞ ট্রেডারদের দ্বারা তৈরি। তবে মনে রাখবেন, অনলাইন গেমিং বা ট্রেডিংয়ে সবসময় ঝুঁকি থাকে। আমরা আপনাকে সঠিক গাইডলাইন দেব, কিন্তু কোনো প্রকার আর্থিক ক্ষতির দায়ভার আমরা গ্রহণ করব না।
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">৪. গোপনীয়তা ও নিরাপত্তা</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      আমাদের প্রিমিয়াম সিগন্যাল বা হ্যাক অন্য কোথাও শেয়ার করা সম্পূর্ণ নিষিদ্ধ। নিয়ম অমান্য করলে আপনার একাউন্ট আমাদের গ্রুপ থেকে স্থায়ীভাবে ব্যান করা হবে।
                    </p>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-4 border border-blue-100">
                    <p className="text-blue-800 text-xs font-medium">
                      দ্রষ্টব্য: মুসা প্রফিট হাব যেকোনো সময় এই শর্তাবলি পরিবর্তন বা পরিমার্জন করার অধিকার সংরক্ষণ করে। নিয়মিত আপডেটের জন্য আমাদের টেলিগ্রাম চ্যানেলে যুক্ত থাকুন।
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 px-6 py-4 flex justify-end">
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="rounded-xl bg-[#000080] px-6 py-2 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
                >
                  আমি সম্মত
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img 
              src="input_file_1.png" 
              alt="Aviator Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-black text-[#000080] uppercase hidden sm:block">
              Mussa
            </span>
          </div>
          <a 
            href="https://t.me/Contact_mussa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#000080] px-4 py-2 text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
          >
            <Send size={16} />
            সাপোর্ট
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 text-slate-900 sm:py-32">
          {/* Background Plane Decoration - Static & Clear */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute -right-10 top-20 w-[350px] sm:w-[500px] lg:w-[700px]">
              <img
                src="input_file_0.png"
                alt="Aviator Plane"
                className="w-full h-auto object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  প্রতারণা নয়, এবার হবে <br />
                  <span className="text-blue-600">সত্যিকারের ইনকাম!</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  আপনি কি ক্রাশ বা এভিয়েটর গেমের সিগন্যাল বা হ্যাক নিতে গিয়ে টাকা দিয়ে প্রতারিত হচ্ছেন? আর এক টাকাও খরচ করতে হবে না! আমাদের স্পেশাল টিমে জয়েন করুন এবং সম্পূর্ণ ফ্রিতে প্রতিদিন ১,৫০০৳ থেকে ৩,০০০৳ ইনকাম করার সুযোগ নিন।
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="http://www.88fb.net/?r=kkg4142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#000080] border border-slate-200 shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    এখনই একাউন্ট ক্রিয়েট করুন
                    <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://t.me/Contact_mussa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#000080] px-8 py-4 text-lg font-bold text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
                  >
                    মুসা ভাইয়ের সাথে কথা বলুন
                    <Send size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Convincing Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  আপনার ইনকাম যাত্রা শুরু হোক আজই
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  আপনি কি বেকার? নাকি চাকরির পাশাপাশি বাড়তি ইনকাম করতে চাচ্ছেন? সময় নষ্ট না করে আজই সঠিক গাইডলাইন নিয়ে কাজ শুরু করুন। আমরা আপনাকে শিখিয়ে দেব কীভাবে লস রিকভার করে প্রফিটে থাকতে হয়। সরাসরি মুসা ভাইয়ের সাথে কন্টাক্ট করুন এবং আপনার ইনকাম যাত্রা শুরু করুন।
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Users, text: "৫০০০+ সফল মেম্বার" },
                    { icon: ShieldCheck, text: "১০০% নিরাপদ পদ্ধতি" },
                    { icon: TrendingUp, text: "প্রতিদিন নিশ্চিত প্রফিট" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <item.icon size={18} />
                      </div>
                      <span className="font-medium text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video overflow-hidden rounded-3xl bg-slate-200 shadow-2xl"
              >
                <img 
                  src="https://picsum.photos/seed/trading/800/450" 
                  alt="Trading Dashboard" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium text-blue-300">লাইভ সিগন্যাল রেজাল্ট</p>
                  <p className="text-xl font-bold">সফলতার হার ৯৫%+</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="bg-slate-100 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                শর্তাবলি ও নিয়মাবলী
              </h2>
              <p className="mt-4 text-slate-600">
                আমাদের সাথে ফ্রিতে কাজ করার জন্য নিচের শর্তগুলো মেনে নেওয়া বাধ্যতামূলক:
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="divide-y divide-slate-100">
                {terms.map((term, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 p-6 transition-colors hover:bg-slate-50"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-blue-600" size={20} />
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="mr-2 font-bold text-slate-400">{index + 1}.</span>
                      {term}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
              <AlertCircle size={24} className="flex-shrink-0" />
              <p className="text-sm font-medium">
                সতর্কতা: নিয়ম অমান্য করলে আমাদের প্রিমিয়াম গ্রুপ থেকে রিমুভ করা হতে পারে।
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-32 relative overflow-hidden">
          {/* Background Decoration - Plane Static & Clear */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img
              src="input_file_0.png"
              alt="Aviator Plane"
              className="absolute -left-10 bottom-10 w-[400px] drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 px-6 py-20 text-center text-slate-900 shadow-xl sm:px-12">
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  সফলভাবে একাউন্ট করেছেন? <br />
                  <span className="text-blue-600">তাহলে স্ক্রিনশট পাঠান নিচে!</span>
                </h2>
                <p className="mt-6 text-lg text-slate-600">
                  একাউন্ট খোলার পর আপনার ইউজারনেম এবং ডিপোজিটের স্ক্রিনশট আমাদের টেলিগ্রামে পাঠান। আমরা আপনাকে আমাদের প্রিমিয়াম সিগন্যাল গ্রুপে যুক্ত করে নেব।
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6">
                  <a
                    href="https://t.me/Contact_mussa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl bg-[#000080] px-10 py-5 text-xl font-bold text-white transition-all hover:scale-105 active:scale-95"
                  >
                    <Send size={24} />
                    টেলিগ্রামে স্ক্রিনশট পাঠান
                  </a>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={20} />
                    <span className="font-medium">ইউজারনেম: @Contact_mussa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <img 
              src="input_file_1.png" 
              alt="Aviator Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-black text-[#000080] uppercase">
              Mussa
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Mussa. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a 
              href="https://t.me/Contact_mussa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              Telegram Support
            </a>
            <button 
              onClick={() => setShowTermsModal(true)}
              className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
