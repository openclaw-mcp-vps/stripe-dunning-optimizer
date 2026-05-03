export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Billing Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart Retry Timing for<br />
          <span className="text-[#58a6ff]">Failed Stripe Payments</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop losing revenue to failed payments. Our ML-powered dunning optimizer analyzes your payment failure patterns and retries at the exact moment each customer is most likely to pay.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Recovering Revenue
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">+34%</div>
            <div className="text-xs text-[#8b949e] mt-1">Recovery Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">72h</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg. Time to Recover</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">$0</div>
            <div className="text-xs text-[#8b949e] mt-1">Setup Cost</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <div className="text-sm font-medium text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Stripe webhook events',
              'ML-optimized retry scheduling',
              'Per-customer failure analytics',
              'Revenue recovery dashboard',
              'Email alerts on recovery wins',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $15/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the retry optimization work?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">We analyze historical payment failure data from your Stripe account — including failure reason codes, time of day, day of week, and customer behavior — to predict the optimal retry window for each individual customer, maximizing the chance of a successful charge.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need to change my Stripe setup?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">No major changes needed. You simply add our webhook endpoint to your Stripe dashboard. We handle the rest — listening for failed payment events and scheduling smart retries automatically through the Stripe API.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What if I want to cancel?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">You can cancel anytime from your billing portal with no questions asked. Your subscription ends at the current billing period and you won't be charged again. We also remove your webhook integration instructions on request.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Dunning Optimizer. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
