"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const codeSnippets = {
  PHP: `
<?php
$name = "John"; // Variable assignment
echo "Hello " . $name . "<br>"; // Output

/* Multi-line
   Comment */
$arr = array(1, 2, 3, 4, 5);
foreach ($arr as $num) {
  echo $num * 2 . "<br>";
}

function greet($who) {
  return "Hi " . $who;
}

echo greet("PHP");
echo "<br>Done!";
?>
  `.trim(),
  Node: `
// This is a Node.js example
const name = "John";
console.log(\`Hello \${name}\`);

const arr = [1, 2, 3, 4, 5];
arr.forEach(num => {
  console.log(num * 2); // Log number
});

function greet(who) {
  return \`Hi \${who}\`;
}

console.log(greet("Node"));
console.log("Done!");
  `.trim(),
  Ruby: `
# Ruby code example
name = "John"
puts "Hello #{name}"

arr = [1, 2, 3, 4, 5]
arr.each do |num|
  puts num * 2 # Multiply and print
end

def greet(who)
  "Hi #{who}"
end

puts greet("Ruby")
puts "Done!"
  `.trim(),
  Java: `
// Java example
public class Main {
  public static void main(String[] args) {
    String name = "John";
    System.out.println("Hello " + name);

    int[] arr = {1, 2, 3, 4, 5};
    for (int num : arr) {
      System.out.println(num * 2);
    }

    System.out.println(greet("Java")); // Call greet
    System.out.println("Done!");
  }

  /**
   * Greets a person.
   * @param who The person to greet.
   * @return A greeting string.
   */
  public static String greet(String who) {
    return "Hi " + who;
  }
}
  `.trim(),
  Python: `
# Python example
name = "John"
print(f"Hello {name}") # Using f-string

arr = [1, 2, 3, 4, 5]
for num in arr:
  print(num * 2)

def greet(who):
  """Greets someone."""
  return f"Hi {who}"

print(greet("Python"))
print("Done!")
  `.trim(),
}

const languages = Object.keys(codeSnippets)

const tokenColors = {
  keyword: "text-pink-400",
  string: "text-emerald-300",
  comment: "text-slate-500 italic",
  variable: "text-sky-300",
  functionName: "text-cyan-300",
  number: "text-amber-300",
  operator: "text-slate-400",
  punctuation: "text-slate-500",
  phpTag: "text-yellow-400 font-semibold",
  className: "text-teal-300",
  default: "text-slate-300",
}

// Simplified Tokenizer
function tokenize(code, language) {
  const tokens = []
  let remainingCode = code

  const rules = [
    // Comments (most specific first)
    { type: "comment", regex: /^\/\*[\s\S]*?\*\/|^\/\/[^\n]*|^#[^\n]*/ },
    // PHP Tags
    { type: "phpTag", regex: /^<\?php|^\?>/, lang: "PHP" },
    // Strings
    { type: "string", regex: /^"(?:[^"\\]|\\.)*"|^'(?:[^'\\]|\\.)*'|^`(?:[^`\\]|\\.)*`/ },
    // Keywords
    {
      type: "keyword",
      regex:
        /^\b(const|let|var|function|if|else|foreach|for|while|return|public|static|void|class|def|new|echo|print|array|do|end|System|out|println|String|int|main|args|import|from|as|puts|extends|implements|interface|package|protected|private|try|catch|finally|throw|throws|yield|async|await|of|in|is|instanceof|typeof|delete|case|switch|default|break|continue|debugger|with|namespace|use|require|include|module|export)\b/,
    },
    // Class Names (often PascalCase, especially after 'new' or 'class')
    { type: "className", regex: /^\b[A-Z][a-zA-Z0-9_]*\b/ },
    // PHP Variables
    { type: "variable", regex: /^\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, lang: "PHP" },
    // Function names (heuristic: word followed by parenthesis)
    { type: "functionName", regex: /^\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\s*\()/ },
    // Numbers
    { type: "number", regex: /^\b\d+(?:\.\d+)?\b/ },
    // General variables / identifiers (must be after keywords, functions, classes)
    { type: "variable", regex: /^\b[a-zA-Z_][a-zA-Z0-9_]*\b/ },
    // Operators
    { type: "operator", regex: /^[=+\-*/%<>!&|^~?:.]+/ },
    // Punctuation
    { type: "punctuation", regex: /^[[\](){};,]+/ },
    // Whitespace (important to preserve)
    { type: "whitespace", regex: /^\s+/ },
    // Fallback for any other single character
    { type: "unknown", regex: /^./ },
  ]

  while (remainingCode.length > 0) {
    let matched = false
    for (const rule of rules) {
      if (rule.lang && rule.lang !== language) continue

      const match = rule.regex.exec(remainingCode)
      if (match) {
        tokens.push({ type: rule.type, content: match[0] })
        remainingCode = remainingCode.substring(match[0].length)
        matched = true
        break
      }
    }
    if (!matched) {
      // Should not be reached if 'unknown' rule is present
      tokens.push({ type: "unknown", content: remainingCode[0] })
      remainingCode = remainingCode.substring(1)
    }
  }
  return tokens
}

export default function DeveloperApiSection() {
  const [activeLanguage, setActiveLanguage] = useState("PHP")

  const currentCode = codeSnippets[activeLanguage]
  const lineNumbers = currentCode.split("\n").length
  const tokens = tokenize(currentCode, activeLanguage)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prevLang) => {
        const currentIndex = languages.indexOf(prevLang)
        const nextIndex = (currentIndex + 1) % languages.length
        return languages[nextIndex]
      })
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

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
            <div className="p-4 text-sm relative font-mono">
              <div className="absolute top-4 left-0 bottom-4 w-10 text-right pr-3 text-slate-500 select-none">
                {Array.from({ length: lineNumbers }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre key={activeLanguage} className="pl-10 overflow-x-auto whitespace-pre-wrap">
                <code>
                  {tokens.map((token, index) => (
                    <span key={index} className={tokenColors[token.type] || tokenColors.default}>
                      {token.content}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
