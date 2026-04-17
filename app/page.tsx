export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      
     <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 pt-20 md:px-10 md:pt-28">
          <div className="mb-8 inline-flex items-center rounded-full border border-violet-500 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
            kognetic.ai
          </div>
        </div>

        {/* FULL WIDTH DARK BAND */}
       <div className="relative bg-slate-950 border-y border-slate-800 overflow-hidden">

          {/* Glow layer */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/5 blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Practical AI
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                For modern service firms
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
                Reduce administrative workload, improve clarity across matters, and free up
                billable time — without restructuring the way your firm works.
              </p>
            </div>
          </div>
        </div>

        {/* BUTTONS BACK ON LIGHT BACKGROUND */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@kognetic.ai"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Request early access
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Speak with us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              THE CHALLENGE
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Service firms are drowning in information — turn that into insights
            </h2>
          </div>
          <div className="grid gap-4 text-slate-600">
            <div className="rounded-2xl border border-slate-200 p-5">
              Endless email chains
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              Lengthy documents and case files
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              Time-consuming note taking and summaries
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              Billable hours lost to administrative work
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              The solution
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Kognetic brings practical AI into your existing workflow
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Deploying within existing Microsoft environments, Kognetic ensures seamless integration. No new platforms, no data leaving your firm — but now with AI 
              summarising documents, extracting key facts and action items, and keeping client context clear across communications.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              No disruption. No rip and replace. We build AI that fits your workflows — not the other way around.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Built for how service teams actually work
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Document Intelligence
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Quickly understand large documents with clear, structured
              summaries.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Email &amp; Matter Context
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Turn long email threads into concise, actionable insights.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Action Extraction
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Identify next steps, obligations, and follow-up items
              automatically.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Secure by Design
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Built on Microsoft Azure with enterprise-grade security and data
              protection.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Security
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Security and control come first
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Kognetic solutions are designed with professional standards in mind. Data can
              be processed within secure Azure environments, with
              controls to ensure your information remains private. 
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-300">
              Data processed within secure Azure environments
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-300">
              No use of your data for model training
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-300">
              Designed with Australian privacy expectations in mind
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Positioning
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Not another platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
			  Kognetic builds an intelligent layer alongside your existing tools within Microsoft's advanced automation/AI environment;
			   simplifying and enhancing how your team works without forcing change, yet inspiring innovation.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-xl font-semibold text-slate-950">
              Early access
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              We’re currently working with a small number of firms to shape the
              first version of kognetic.ai. If you&apos;re interested in exploring
              how AI can reduce workload without adding complexity, we’d welcome
              a conversation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@kognetic.ai"
                className="inline-flex items-center justify-center rounded-2xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Request early access
              </a>
              <a
                href="mailto:hello@kognetic.ai"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <span className="font-semibold text-slate-700">Kognetic.ai</span> ·
            Servicing South East Queensland, Australia
          </div>
          <a
            href="mailto:hello@kognetic.ai"
            className="transition hover:text-slate-900"
          >
            KOGNETIC  |  Contact kognetic.ai
          </a>
        </div>
      </footer>
    </main>
  );
}