import React from 'react';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min.js';
import profileImg from './assets/profile.png'; 

function App() {
  const downloadPDF = () => {
    alert("កំពុងរៀបចំទាញយក PDF! សូមរង់ចាំបន្តិច..."); 
    
    try {
      const element = document.getElementById('portfolio-content');
      
      const opt = {
        margin: 0.5,
        filename: 'RavRithy_Final.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).save().then(() => {
        console.log("ទាញយក PDF ជោគជ័យ!");
      });
      
    } catch (error) {
      console.error("មានបញ្ហាក្នុងការបង្កើត PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-sans">
      {/* ប៊ូតុង Download PDF */}
      <div className="max-w-4xl mx-auto mb-4 flex justify-end">
        <button onClick={downloadPDF} className="bg-[#2563eb] hover:bg-[#1d4ed8] text-[#ffffff] font-bold py-2 px-6 rounded shadow-md transition-all">
          Download PDF
        </button>
      </div>

      {/* ខ្លឹមសារ Portfolio */}
      <div id="portfolio-content" className="max-w-4xl mx-auto bg-[#ffffff] p-8 md:p-12 shadow-lg">
        
        {/* 1. Hero / About Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 border-b pb-8 mb-8">
          <div className="w-32 h-32 bg-[#e5e7eb] rounded-full overflow-hidden shrink-0 shadow-inner">
            <img src={profileImg} alt="Rav Rithy" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#1f2937]">Rav Rithy</h1>
            <h2 className="text-xl text-[#2563eb] mt-2 font-medium">Full-Stack Web Developer & IT Professional</h2>
            <p className="mt-4 text-[#4b5563] leading-relaxed">
              Passionate developer and digital marketer with expertise in building dynamic, full-stack applications and automated tools. Experienced in creating robust desktop applications and modern web solutions.
            </p>
          </div>
        </section>

        {/* 2. Skills Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Tailwind CSS', 'Laravel', 'Python', 'SQL Server'].map((skill) => (
              <span key={skill} className="bg-[#f3f4f6] border border-[#e5e7eb] text-[#374151] px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 3. Projects Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4">Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="border border-[#e5e7eb] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h4 className="text-lg font-bold text-[#1f2937]">CWG HR Payroll API</h4>
              <p className="text-[#4b5563] text-sm mt-2 mb-3 flex-grow">A comprehensive backend structure for managing employee records and company data.</p>
              <div className="mb-3">
                <span className="text-xs text-[#2563eb] font-mono bg-[#eff6ff] inline-block px-2 py-1 rounded">Tech: Python, Flask, SQL Server</span>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Project ↗
              </a>
            </div>
            
            {/* Project 2 */}
            <div className="border border-[#e5e7eb] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h4 className="text-lg font-bold text-[#1f2937]">AI Dubber Ultimate</h4>
              <p className="text-[#4b5563] text-sm mt-2 mb-3 flex-grow">A video dubbing application featuring advanced video effects and live previews.</p>
              <div className="mb-3">
                <span className="text-xs text-[#2563eb] font-mono bg-[#eff6ff] inline-block px-2 py-1 rounded">Tech: Python</span>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Project ↗
              </a>
            </div>

            {/* Project 3 */}
            <div className="border border-[#e5e7eb] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <h4 className="text-lg font-bold text-[#1f2937]">Telegram Chat Management Inbox</h4>
              <p className="text-[#4b5563] text-sm mt-2 mb-3 flex-grow">A live customer message handling system built via a Telegram bot interface.</p>
              <div className="mb-3">
                <span className="text-xs text-[#2563eb] font-mono bg-[#eff6ff] inline-block px-2 py-1 rounded">Tech: Next.js, Socket.io</span>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Project ↗
              </a>
            </div>

          </div>
        </section>

        {/* 4. Contact Section */}
        <section>
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4">Contact Information</h3>
          <div className="flex flex-col gap-3 text-[#4b5563] bg-[#f9fafb] p-6 rounded-lg border border-[#f3f4f6]">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-[#1f2937]">Email:</span> 
              <a href="mailto:rithyrav@gmail.com" className="text-[#2563eb] hover:underline">rithyrav@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-[#1f2937]">LinkedIn:</span> 
              <a href="https://www.linkedin.com/in/rav-rithy-b78997405/" className="text-[#2563eb] hover:underline">linkedin.com/in/ravrithy</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-[#1f2937]">GitHub:</span> 
              <a href="https://github.com/RithyRav" className="text-[#2563eb] hover:underline">github.com/ravrithy</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
