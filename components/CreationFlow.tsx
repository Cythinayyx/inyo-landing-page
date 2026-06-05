const steps = [
  {
    title: "选择表达主题",
    text: "从旅行、夜晚、关系、日常灵感开始。",
  },
  {
    title: "AI 理解人设与情绪",
    text: "把你的照片、偏好和当下心情变成创作方向。",
  },
  {
    title: "生成连续视频脚本",
    text: "让每一段画面之间有承接、有节奏。",
  },
  {
    title: "持续延续故事",
    text: "不是一次性模板，而是能继续生长的表达。",
  },
];

export function CreationFlow() {
  return (
    <section id="flow" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-[0.72fr_1.28fr] gap-12">
          <div>
            <p className="text-sm font-medium text-[#6f8298]">AI 创作流程</p>
            <h2 className="mt-3 text-5xl font-semibold leading-tight tracking-normal text-[#152033]">
              从一个念头，到一组连续故事。
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b6f88]">
              低门槛地把灵感、照片与情绪接起来，让创作更像自然表达。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="min-h-64 rounded-3xl border border-[#d5e4f1] bg-white/75 p-7 shadow-sm"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e2eef8] text-sm font-semibold text-[#506780]">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-normal text-[#1c2a40]">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#667890]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
