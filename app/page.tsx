import Image from 'next/image'
import Link from 'next/link'

// 1. เพิ่มข้อมูลเมนูไว้ที่นี่เพื่อให้แก้ไขง่ายในอนาคต
const MENU_ITEMS = [
  {
    id: 1,
    name: "สตรอว์เบอร์รี่โยเกิร์ต",
    price: 85,
    image: "/images/smoot.jpg", // ใช้รูปเดิมที่คุณมี หรือเปลี่ยนชื่อไฟล์
    tag: "ยอดฮิต",
    bgColor: "bg-pink-50"
  },
  {
    id: 2,
    name: "มะม่วงน้ำดอกไม้ปั่น",
    price: 75,
    image: "/images/smoot.jpg", 
    tag: "สดชื่น",
    bgColor: "bg-orange-50"
  },
  {
    id: 3,
    name: "อะโวคาโดน้ำผึ้ง",
    price: 95,
    image: "/images/smoot.jpg",
    tag: "สุขภาพ",
    bgColor: "bg-green-50"
  }
];

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-gray-800 font-sans selection:bg-orange-200">
      {/* --- Navbar --- */}
      <nav className="p-6 flex justify-between items-center bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-[#D97706] tracking-tight">FRESHY BLEND</h1>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="#menu" className="text-orange-600 hover:text-orange-700">เมนู</Link>
            <Link href="#about" className="text-gray-600 hover:text-orange-500 transition">About</Link>
            <Link href="#why" className="text-gray-600 hover:text-orange-500 transition">ทำไมต้องเรา</Link>
            <Link href="#contact" className="text-gray-600 hover:text-orange-500 transition">ติดต่อเรา</Link>
          </div>
          <button className="bg-[#E47B45] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#d16a3a] transition shadow-md shadow-orange-200">
            สั่งเลย
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Tmsh heo section</p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.15] text-gray-900">
              เติมความสดชื่น <br />
              <span className="text-[#E47B45]">ด้วยผลไม้แท้</span> 100%
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              น้ำปั่นเนื้อเนียนละเอียด สูตรน้ำตาลน้อย อร่อยชื่นใจพรีเมียม 
              คัดสรรผลไม้สดส่งตรงจากสวนถึงมือคุณทุกวัน
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#E47B45] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-[#d16a3a] transition-all hover:-translate-y-1">
              สั่งเดลิเวอรี่
            </button>
            <button className="bg-white border-2 border-[#E47B45] text-[#E47B45] px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-50 transition-all hover:-translate-y-1">
              ดูเมนูทั้งหมด
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative w-full h-[400px] md:h-[550px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-200 rounded-full filter blur-[100px] opacity-40 animate-pulse"></div>
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-300">
            <Image
              src="/images/smoot.jpg" 
              alt="Fresh Smoothie"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- New: Menu Section (หน้าถัดไป) --- */}
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">เมนูสดชื่นแนะนำ</h2>
            <p className="text-gray-500 text-lg">คัดสรรรสชาติที่ดีที่สุดมาเพื่อคุณ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Image Box */}
                <div className={`relative h-[400px] w-full ${item.bgColor} rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                  <span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                    {item.tag}
                  </span>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-12 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Details */}
                <div className="mt-6 flex justify-between items-center px-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#E47B45] transition-colors">{item.name}</h3>
                    <p className="text-[#E47B45] font-bold text-lg">{item.price} บาท</p>
                  </div>
                  <button className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#E47B45] transition-all shadow-lg active:scale-90">
                    <span className="text-2xl font-light">+</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="bg-[#F9F9F9] py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-800">ทำไมใครๆ ก็รักเรา</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon="🍓" 
              title="ผลไม้สดพรีเมียม" 
              desc="เราใช้ผลไม้สดคัดจากสวนทุกลูก ไม่ใช้ผลไม้แช่แข็ง เพื่อรสชาติที่ดีที่สุด" 
            />
            <FeatureCard 
              icon="🍯" 
              title="ความหวานที่สั่งได้" 
              desc="ใช้น้ำผึ้งแท้แทนน้ำเชื่อม หรือเลือกแบบ 0% Cal สำหรับสายคลีน" 
            />
            <FeatureCard 
              icon="❄️" 
              title="เนื้อสัมผัสเนียนนุ่ม" 
              desc="ด้วยเทคนิคการปั่นแบบพิเศษ ทำให้เนื้อสมูทตี้เนียนละเอียด ไม่แยกชั้น" 
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-white p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}