const moments = [
  {
    moment: "那晚回家的路，其实很有电影感。",
    result: "心头的情绪，被手残废片冲淡了",
    type: "drive",
  },
  {
    moment: "朋友聚会那天，其实很好笑。",
    result: "真正开心的时候，往往顾不上记录。",
    type: "party",
  },
  {
    moment: "旅行中的风景，其实比照片里好看很多。",
    result: "生活一直在发生，内容却总是零零散散。",
    type: "scattered",
  },
];

function ResultFrame({ type }: { type: string }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-[26px] border border-white/70 bg-white/48 shadow-[0_18px_64px_rgba(86,106,128,0.08)] backdrop-blur-xl transition duration-500 hover:scale-[1.01]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(220,235,245,0.46),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.86),rgba(232,239,246,0.62))]" />

      {type === "drive" ? (
        <>
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/pain-drive-cinematic.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(20,28,42,0.22))]" />
          <div className="absolute bottom-5 right-5 h-20 w-28 overflow-hidden rounded-[20px] border border-white/70 bg-white/42 shadow-[0_14px_42px_rgba(29,38,52,0.24)]">
            <img
              alt=""
              className="h-full w-full object-cover opacity-80 saturate-[0.82]"
              src="/images/pain-drive-record.png"
            />
            <div className="absolute inset-0 bg-white/14" />
          </div>
        </>
      ) : null}

      {type === "empty" ? (
        <>
          <div className="absolute left-6 top-6 h-20 w-28 rounded-3xl border border-dashed border-[#c3cedb] bg-white/38 blur-[0.2px]" />
          <div className="absolute bottom-7 left-6 h-2 w-36 rounded-full bg-[#b4c0cf]/24" />
          <div className="absolute bottom-12 left-6 h-2 w-24 rounded-full bg-[#c2ccd8]/24" />
          <div className="absolute right-6 top-6 rounded-full border border-[#d5dfea] bg-white/42 px-3 py-1 text-xs text-[#96a2b2]">
            未完成
          </div>
        </>
      ) : null}

      {type === "party" ? (
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/pain-party-line.png"
        />
      ) : null}

      {type === "scattered" ? (
        <>
          <div className="absolute left-6 top-7 h-20 w-24 rotate-[-3deg] overflow-hidden rounded-[22px] bg-white/42 opacity-90">
            <img
              alt=""
              className="h-full w-full object-cover saturate-[0.88]"
              src="/images/pain-travel-01.png"
            />
          </div>
          <div className="absolute left-28 top-13 h-16 w-24 rotate-[4deg] overflow-hidden rounded-[20px] border border-white/58 bg-white/42">
            <img
              alt=""
              className="h-full w-full object-cover saturate-[0.88]"
              src="/images/pain-travel-02.png"
            />
          </div>
          <div className="absolute right-7 bottom-8 h-20 w-24 rotate-[2deg] overflow-hidden rounded-[22px] bg-white/42 opacity-90">
            <img
              alt=""
              className="h-full w-full object-cover saturate-[0.88]"
              src="/images/pain-travel-03.png"
            />
          </div>
          <div className="absolute left-7 bottom-7 h-2 w-28 rounded-full bg-[#b8c4d1]/26" />
          <div className="absolute right-6 top-6 rounded-full border border-[#d5dfea] bg-white/42 px-3 py-1 text-xs text-[#96a2b2]">
            零散片段
          </div>
        </>
      ) : null}

      <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-[#aeb9c7]/32 via-[#cdd7e2]/24 to-transparent" />
    </div>
  );
}

function MomentCard({
  item,
  index,
}: {
  item: (typeof moments)[number];
  index: number;
}) {
  return (
    <article className="flex min-h-[430px] w-[82vw] max-w-[380px] shrink-0 flex-col rounded-[34px] border border-white/72 bg-white/42 p-6 shadow-[0_22px_74px_rgba(86,106,128,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:w-[380px] lg:w-auto lg:max-w-none">
      <div>
        <p className="text-xs font-medium tracking-[0.22em] text-[#8a9ab0]">
          MOMENT 0{index + 1}
        </p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#233149]">
          {item.moment}
        </h3>
      </div>

      <div className="mt-6">
        <ResultFrame type={item.type} />
      </div>

      <p className="mt-5 text-base font-light leading-7 text-[#63748a]">
        {item.result}
      </p>
    </article>
  );
}

export function PainPoints() {
  return (
    <section id="creation" className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div>
            <p className="text-sm font-medium text-[#6f8298]">表达之前</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[#152033]">
              情绪常常开始了，画面却没跟上。
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-8 text-[#697b92]">
              很多真正值得记录的 moment，
              <br />
              后来才发现，
              <br />
              根本什么都没留下。
            </p>
          </div>
          <div className="hidden h-px w-48 bg-[#ccdae8] lg:block" />
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-4">
          <div className="flex gap-5 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {moments.map((item, index) => (
              <MomentCard index={index} item={item} key={item.moment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
