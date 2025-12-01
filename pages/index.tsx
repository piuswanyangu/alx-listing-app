import Card from "@/components/Card";

export default function Home(){
  return(
    <><> <h1 className="text-lg text-green-500 text-center"> Welcome to my alx listing app</h1></>
    <main className=" p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

      <Card title="Modern Apartment" image="/assets/m1.jpg" price={5000} />
      <Card title="Beach House" image="/assets/m4.jpg" price={7500} />
      <Card title="Beach House" image="/assets/m3.jpg" price={7500} />
    </main></>
  )
}