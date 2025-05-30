"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const codeSnippets = {
  PHP: `
<?php
$name = "John";
echo "Hello " . $name . "<br>";

$arr = array(1, 2, 3, 4, 5);
foreach ($arr as $num) {
  echo $num * 2 . "<br>";
}

function greet($who) {
  return "Hi " . $who;
}

echo greet("PHP");
echo "<br>Done!";
  `.trim(),
  Node: `
const name = "John";
console.log(\`Hello \${name}\`);

const arr = [1, 2, 3, 4, 5];
arr.forEach(num => {
  console.log(num * 2);
});

function greet(who) {
  return \`Hi \${who}\`;
}

console.log(greet("Node"));
console.log("Done!");
  `.trim(),
  Ruby: `
name = "John"
puts "Hello #{name}"

arr = [1, 2, 3, 4, 5]
arr.each do |num|
  puts num * 2
end

def greet(who)
  "Hi #{who}"
end

puts greet("Ruby")
puts "Done!"
  `.trim(),
  Java: `
public class Main {
  public static void main(String[] args) {
    String name = "John";
    System.out.println("Hello " + name);

    int[] arr = {1, 2, 3, 4, 5};
    for (int num : arr) {
      System.out.println(num * 2);
    }

    System.out.println(greet("Java"));
    System.out.println("Done!");
  }

  public static String greet(String who) {
    return "Hi " + who;
  }
}
  `.trim(),
  Python: `
name = "John"
print(f"Hello {name}")

arr = [1, 2, 3, 4, 5]
for num in arr:
  print(num * 2)

def greet(who):
  return f"Hi {who}"

print(greet("Python"))
print("Done!")
  `.trim(),
}

const languages = Object.keys(codeSnippets)

export default function DeveloperApiSection() {
  const [activeLanguage, setActiveLanguage] = useState("PHP")

  const currentCode = codeSnippets[activeLanguage]
  const lineNumbers = currentCode.split("\n").length

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      className="bg-slate-900 text-white py-16 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <p className="text-pink-500 font-semibold text-sm uppercase tracking-wider mb-3">DEVELOPER APIS</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fast setup Easy-
              <br />
              to-use APIs
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
              will give you a complete account create automation scenarios.
            </p>
            <motion.a
              href="#"
              className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group"
              whileHover={{ x: 5 }}
            >
              Read Documentation
              <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div variants={itemVariants} className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="px-4 pt-4 flex space-x-2 border-b border-slate-700">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLanguage(lang)}
                  className={`pb-2 px-3 text-sm font-medium transition-colors
                    ${
                      activeLanguage === lang
                        ? "border-b-2 border-blue-500 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="p-4 text-sm relative">
              <div className="absolute top-4 left-0 bottom-4 w-10 text-right pr-3 text-slate-500 select-none">
                {Array.from({ length: lineNumbers }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre className="pl-10 overflow-x-auto">
                <code className={`language-${activeLanguage.toLowerCase()}`}>{currentCode}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
