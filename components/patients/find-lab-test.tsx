"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Clock, FileText, Info } from 'lucide-react'

const labTests = [
  { id: 1, name: 'ALP', category: 'Biochemistry', price: 'Rs. 350', turnaround: '24 hours', description: 'Alkaline Phosphatase test for liver and bone health' },
  { id: 2, name: 'Amylase (Serum)', category: 'Biochemistry', price: 'Rs. 600', turnaround: '24 hours', description: 'Serum Amylase for pancreas function' },
  { id: 3, name: 'APTT', category: 'Hematology', price: 'Rs. 400', turnaround: '24 hours', description: 'Activated Partial Thromboplastin Time' },
  { id: 4, name: 'Bilirubin', category: 'Biochemistry', price: 'Rs. 350', turnaround: '24 hours', description: 'Measures bilirubin levels in blood' },
  { id: 5, name: 'Blood Group', category: 'Hematology', price: 'Rs. 200', turnaround: '2 hours', description: 'Determines your blood type and Rh factor' },
  { id: 6, name: 'BT/CT', category: 'Hematology', price: 'Rs. 450', turnaround: '2 hours', description: 'Bleeding Time/Clotting Time' },
  { id: 7, name: 'CBC', category: 'Hematology', price: 'Rs. 500', turnaround: '24 hours', description: 'Complete Blood Count - comprehensive blood analysis' },
  { id: 8, name: 'Cholesterol', category: 'Biochemistry', price: 'Rs. 400', turnaround: '24 hours', description: 'Measures total cholesterol levels' },
  { id: 9, name: 'Creatinine', category: 'Biochemistry', price: 'Rs. 350', turnaround: '24 hours', description: 'Kidney function test' },
  { id: 10, name: 'Dengue NS1', category: 'Serology', price: 'Rs. 700', turnaround: '24 hours', description: 'Dengue NS1 Antigen test' },
  { id: 11, name: 'ESR', category: 'Hematology', price: 'Rs. 200', turnaround: '24 hours', description: 'Erythrocyte Sedimentation Rate for inflammation detection' },
  { id: 12, name: 'H. Pylori (Blood)', category: 'Serology', price: 'Rs. 500', turnaround: '24 hours', description: 'H. Pylori antibody test in blood' },
  { id: 13, name: 'H. Pylori (Stool)', category: 'Microbiology', price: 'Rs. 500', turnaround: '48 hours', description: 'H. Pylori antigen test in stool' },
  { id: 14, name: 'HbA1C', category: 'Diabetes', price: 'Rs. 1200', turnaround: '24 hours', description: 'Glycated Hemoglobin - 3-month blood sugar average' },
  { id: 15, name: 'HBS (ICT)', category: 'Serology', price: 'Rs. 250', turnaround: '24 hours', description: 'Hepatitis B Surface Antigen screening' },
  { id: 16, name: 'HCV (ICT)', category: 'Serology', price: 'Rs. 250', turnaround: '24 hours', description: 'Hepatitis C Virus antibody test' },
  { id: 17, name: 'HIV (ICT)', category: 'Serology', price: 'Rs. 300', turnaround: '24 hours', description: 'HIV antibody screening test' },
  { id: 18, name: 'LFTs', category: 'Biochemistry', price: 'Rs. 1000', turnaround: '24 hours', description: 'Liver Function Tests panel' },
  { id: 19, name: 'Lipid Profile', category: 'Biochemistry', price: 'Rs. 1400', turnaround: '24 hours', description: 'Complete cholesterol and lipid analysis' },
  { id: 20, name: 'M. Albumin', category: 'Biochemistry', price: 'Rs. 700', turnaround: '24 hours', description: 'Microalbumin test for kidney function' },
  { id: 21, name: 'MP', category: 'Microbiology', price: 'Rs. 400', turnaround: '2 hours', description: 'Malaria Parasite test' },
  { id: 22, name: 'OGTT', category: 'Diabetes', price: 'Rs. 700', turnaround: '3 hours', description: 'Oral Glucose Tolerance Test' },
  { id: 23, name: 'Peripheral Smear', category: 'Hematology', price: 'Rs. 800', turnaround: '24 hours', description: 'Blood cell morphology examination' },
  { id: 24, name: 'Pregnancy Test (ICT)', category: 'Serology', price: 'Rs. 250', turnaround: '1 hour', description: 'Rapid pregnancy detection test' },
  { id: 25, name: 'PT/INR', category: 'Hematology', price: 'Rs. 550', turnaround: '24 hours', description: 'Prothrombin Time/International Normalized Ratio' },
  { id: 26, name: 'RFTs', category: 'Biochemistry', price: 'Rs. 700', turnaround: '24 hours', description: 'Renal Function Tests panel' },
  { id: 27, name: 'SGPT', category: 'Biochemistry', price: 'Rs. 350', turnaround: '24 hours', description: 'Liver enzyme test to assess liver function' },
  { id: 28, name: 'Sugar (FBS/RBS)', category: 'Diabetes', price: 'Rs. 150', turnaround: '1 hour', description: 'Fasting/Random Blood Sugar test' },
  { id: 29, name: 'TGs', category: 'Biochemistry', price: 'Rs. 450', turnaround: '24 hours', description: 'Triglycerides level measurement' },
  { id: 30, name: 'Urea', category: 'Biochemistry', price: 'Rs. 350', turnaround: '24 hours', description: 'Blood Urea Nitrogen test' },
  { id: 31, name: 'Uric Acid', category: 'Biochemistry', price: 'Rs. 350', turnaround: '24 hours', description: 'Uric Acid test for gout screening' },
  { id: 32, name: 'Urine R/E', category: 'Urinalysis', price: 'Rs. 200', turnaround: '12 hours', description: 'Urine Routine Examination' },
]

const categories = [
  'All Categories',
  'Hematology',
  'Biochemistry',
  'Diabetes',
  'Serology',
  'Urinalysis',
  'Microbiology',
  'Cardiology',
  'General',
]

export function FindLabTest() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  const filteredTests = labTests.filter((test) => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || test.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section ref={ref} id="find-test" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block text-[#5F9ED1] font-semibold text-sm uppercase tracking-wider mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Diagnostic Services
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#3F4A7A] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Find a Lab Test
          </h2>
          <p className={`text-[#8A8A8A] max-w-2xl mx-auto mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Browse our comprehensive list of laboratory tests and diagnostic services.
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
            <Input
              type="text"
              placeholder="Search lab tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-[#5F9ED1] text-white' 
                  : 'border-[#E2E2E2] text-[#3F4A7A] hover:bg-[#F4F6F8] bg-transparent'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Tests List */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredTests.map((test, index) => (
            <div
              key={test.id}
              className={`bg-white rounded-xl border border-[#E2E2E2] p-5 hover:border-[#5F9ED1] hover:shadow-lg transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 4) * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#5F9ED1]/10 text-[#5F9ED1] text-xs rounded-full">
                      {test.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#3F4A7A] group-hover:text-[#5F9ED1] transition-colors">
                    {test.name}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm mt-1">{test.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                    <span className="flex items-center gap-1 text-[#8A8A8A]">
                      <Clock className="w-4 h-4" />
                      {test.turnaround}
                    </span>
                    <span className="flex items-center gap-1 text-[#3F4A7A] font-medium">
                      {test.price}
                    </span>
                  </div>
                </div>
                
                <Button
                  asChild
                  size="sm"
                  className="shrink-0 bg-[#5F9ED1] hover:bg-[#4a8bc4] text-white"
                >
                  <Link href="/contact">
                    <FileText className="w-4 h-4 mr-1" />
                    Book
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#8A8A8A]">No lab tests found matching your search criteria.</p>
          </div>
        )}

        {/* Info Box */}
        <div className={`mt-8 bg-[#F4F6F8] rounded-xl p-6 flex items-start gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Info className="w-6 h-6 text-[#5F9ED1] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#3F4A7A] mb-1">Preparation Instructions</h4>
            <p className="text-[#8A8A8A] text-sm">
              Some tests require fasting or special preparation. Please confirm with our staff when booking your test. 
              Results are typically available within the turnaround time mentioned for each test.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
