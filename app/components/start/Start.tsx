import Image from "next/image";

const Start = () => {
  return (
    <section 
      className="relative z-[100] h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-orange-100"
    >
      {/* optional: overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/40 to-transparent z-0"></div>

      {/* content */}
      <div className="relative z-10 text-center max-w-3xl p-8">
        <Image
          src="/therapy-removebg-preview.png"
          alt="Community"
          width={400}
          height={400}
          className="mx-auto mix-blend-multiply"
        />

        <h1 className="mt-6 text-5xl font-bold text-purple-800">
          Beyond Silence
        </h1>
        <div className="bg-purple-500 w-40 h-2 rounded-full mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Beyond Silence is a safe and supportive space where you can openly
          share what you’re going through without fear of judgment. Here, your
          voice matters, your struggles are acknowledged, and you can connect
          with understanding hearts ready to listen and help.
        </p>
      </div>
    </section>
  );
};

export default Start;
