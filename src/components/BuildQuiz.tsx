import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, X, Send } from "lucide-react";
import { db } from "@/src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface QuizStep {
  id: string;
  question: string;
  options?: string[];
  type: "text" | "choice" | "email";
  field: string;
}

const steps: QuizStep[] = [
  {
    id: "name",
    question: "First, what should we call you?",
    type: "text",
    field: "name"
  },
  {
    id: "email",
    question: "What's the best email to reach you at?",
    type: "email",
    field: "email"
  },
  {
    id: "business",
    question: "What type of business are we building for?",
    options: ["E-commerce", "Service / Agency", "Logistics", "SaaS / Tech", "Other"],
    type: "choice",
    field: "businessType"
  },
  {
    id: "goal",
    question: "What's your primary objective?",
    options: ["Increase Conversions", "Automate Operations", "Launch New Product", "Scale Infrastructure"],
    type: "choice",
    field: "goal"
  },
  {
    id: "budget",
    question: "What's your estimated budget range?",
    options: ["$300 - $1,000", "$1,000 - $5,000", "$5,000 - $20,000", "$20,000+"],
    type: "choice",
    field: "budget"
  }
];

export default function BuildQuiz({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (value: string) => {
    const updatedData = { ...formData, [steps[currentStep].field]: value };
    setFormData(updatedData);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(updatedData);
    }
  };

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "buildRequests"), {
        ...data,
        status: "new",
        createdAt: serverTimestamp()
      });
      setIsComplete(true);
    } catch (error) {
      console.error("Error submitting request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-zinc-500 transition-colors hover:text-white"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-2xl">
            {!isComplete ? (
              <div className="space-y-12">
                <div className="flex gap-2">
                  {steps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                        idx <= currentStep ? "bg-red-600" : "bg-zinc-800"
                      }`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <p className="text-sm font-bold uppercase tracking-widest text-red-500">
                      Step {currentStep + 1} of {steps.length}
                    </p>
                    <h2 className="text-4xl font-bold sm:text-5xl">{steps[currentStep].question}</h2>

                    {steps[currentStep].type === "choice" ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {steps[currentStep].options?.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleNext(option)}
                            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:border-red-500/50 hover:bg-red-500/5"
                          >
                            <span className="text-lg font-medium">{option}</span>
                            <ArrowRight size={20} className="text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-red-500" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="relative">
                        <input
                          autoFocus
                          type={steps[currentStep].type}
                          placeholder="Type your answer here..."
                          className="w-full border-b-2 border-zinc-800 bg-transparent py-4 text-3xl font-medium outline-none transition-colors focus:border-red-600"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && (e.target as HTMLInputElement).value) {
                              handleNext((e.target as HTMLInputElement).value);
                            }
                          }}
                        />
                        <p className="mt-4 text-sm text-zinc-500">Press Enter to continue</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-600">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl font-bold">Request Received.</h2>
                <p className="text-xl text-zinc-400">
                  We're reviewing your goals. Expect a message from our team within 24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="rounded-full bg-white px-8 py-3 font-bold text-black transition-transform hover:scale-105"
                >
                  Back to Site
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
