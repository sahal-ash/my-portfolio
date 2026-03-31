import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-6">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row items-center gap-8"
        >
          <img
            src="/images/my-photo.jpg"
            alt="profile"
            className="w-40 h-40 rounded-full border-4 border-sky-400 shadow-lg"
          />

          <div>
            <h1 className="text-4xl font-bold text-sky-400">Muhammed Sahal</h1>
            <p className="text-lg mt-2 text-gray-300">Aspiring Database & Systems Engineer</p>
            <p className="mt-4 text-gray-400 max-w-lg">
              I specialize in PostgreSQL, SQL optimization, and building data-driven systems.
              Currently exploring TimescaleDB and cloud technologies.
            </p>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-sky-400">About</h2>
          <p className="mt-3 text-gray-400">
            Computer Science graduate with experience in SQL optimization, data analysis, and performance tuning.
            I enjoy solving complex database problems and improving system efficiency.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-sky-400">Projects</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">

            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800 p-4 rounded-2xl shadow-lg">
              <img src="/images/employee attrition.png" alt="Employee Attrition" className="rounded-lg mb-3" />
              <h3 className="font-bold text-lg">Employee Attrition</h3>
              <p className="text-gray-400">SQL-based data analysis and prediction system.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800 p-4 rounded-2xl shadow-lg">
              <img src="/images/broken road detection.png" alt="Broken Road Detection" className="rounded-lg mb-3" />
              <h3 className="font-bold text-lg">Broken Road Detection</h3>
              <p className="text-gray-400">Real-time deep learning pipeline for road analysis.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800 p-4 rounded-2xl shadow-lg">
              <img src="/images/ai photo assist.png" alt="AI Photography Assistant" className="rounded-lg mb-3" />
              <h3 className="font-bold text-lg">AI Photography Assistant</h3>
              <p className="text-gray-400">Live video analysis system using AI.</p>
            </motion.div>

          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-sky-400">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "PostgreSQL",
              "SQL",
              "Query Optimization",
              "Python",
              "Linux CLI",
              "Git"
            ].map((skill, index) => (
              <span key={index} className="bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Learning */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-sky-400">Currently Learning</h2>
          <ul className="mt-3 text-gray-400 list-disc list-inside">
            <li>TimescaleDB (Hypertables, Time-series data)</li>
            <li>AWS (EC2, RDS basics)</li>
            <li>Docker fundamentals</li>
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-sky-400">Contact</h2>
          <p className="mt-3 text-gray-400">Email: sahalts999@gmail.com</p>
        </motion.section>

      </div>
    </div>
  );
}
