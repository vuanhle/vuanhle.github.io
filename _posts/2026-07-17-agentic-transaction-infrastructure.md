---
layout: homepage
title: "You Should Have Already Invested in Agentic Transaction Infrastructure By Now"
description: A deep-tech investment essay on why agent identity, delegated authority, usage metering, payment orchestration, and settlement are becoming the scarce layer in agentic AI.
permalink: /blog/agentic-transaction-infrastructure/
thumbnail: /assets/img/blog/agentic-commerce-thumb.webp
thumbnail_alt: Agentic transaction infrastructure control-plane thumbnail
category_label: Deep-Tech Essay
mermaid: true
---

<div class="essay-visual">
  <img src="/assets/img/blog/agentic-transaction-infra.webp" alt="Agentic transaction infrastructure diagram" width="1400" height="760" loading="eager" decoding="async">
</div>

# You Should Have Already Invested in Agentic Transaction Infrastructure By Now

## Transact transact

**The scarce layer in agentic AI is no longer model intelligence.** It is the infrastructure that lets software identify itself, receive delegated authority, meter usage, move money, and settle outcomes safely across real systems. [Visa](https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21331.html), [PayPal](https://newsroom.paypal-corp.com/2025-04-29-PayPal-Launches-Agentic-Commerce-Services-to-Power-the-Future-of-Shopping), and [Mastercard](https://www.mastercard.com/news/press/2025/april/mastercard-agent-pay/) are already operationalizing that stack, while startups like [Skyfire](https://www.skyfire.xyz/), [Nevermined](https://nevermined.ai/), and [Sapiom](https://www.sapiom.ai/) are building the control planes underneath it. 

Assumptions: the explicit forecast horizon is **one to three years**; risk tolerance was unspecified, so this is written for an investor willing to underwrite infrastructure/platform risk rather than only application-layer velocity.

## Adoption

## Concept stack for investors

<div class="concept-stack" aria-label="Investor concept stack for agentic transaction infrastructure">
  <article><span>01</span><h3>Agent identity</h3><p>A machine-readable way to know which software actor is requesting access, payment, or execution.</p></article>
  <article><span>02</span><h3>Delegated authority</h3><p>The user's or enterprise's bounded permission: what the agent may buy, call, approve, or retry.</p></article>
  <article><span>03</span><h3>Metering</h3><p>The usage layer that turns API calls, compute, data, or workflows into billable events.</p></article>
  <article><span>04</span><h3>Settlement</h3><p>The financial and operational layer that reconciles money movement, fulfillment, refunds, and audit trails.</p></article>
</div>

Investor translation: the investable bottleneck is not simply "agents can pay." It is the control plane that proves who the agent is, what it is allowed to do, how usage is priced, and how the outcome gets settled when something breaks.


```mermaid
flowchart LR
    A[Models] --> B[Agents]
    B --> C[Identity and Policy]
    C --> D[Transactions]
    D --> E[Settlement and Ops]
    E --> F[Revenue, Audit, Trust]
```

Most investors are still underwriting agents like chat products with tools attached. That is late. Once software can act, the bottleneck shifts from **reasoning** to **execution**. Not “can the model decide?” but “can the agent authenticate, obtain permission, pay, reconcile, and recover when something breaks?” That is why the real category is not agent UX. It is agentic transaction infrastructure. 

This layer is broader than payments. It includes agent identity, delegated spend controls, merchant and API access, usage metering, transaction orchestration, settlement, and post-purchase operations. [Skyfire frames the problem](https://www.skyfire.xyz/) as access, identity, and checkout across the open internet. [Nevermined frames it as usage-based plans](https://nevermined.ai/blog/usage-based-pricing-work-ai-agents), fiat and crypto payments, and on-chain settlement for agents. [PayPal explicitly bundles catalog, inventory, payments, order processing, shipping, and post-purchase support](https://newsroom.paypal-corp.com/2025-04-29-PayPal-Launches-Agentic-Commerce-Services-to-Power-the-Future-of-Shopping) into its agentic stack.

The reason I would have wanted exposure **already** is that this is no longer a speculative architecture deck. [Visa opened Visa Intelligent Commerce to developers in April 2025](https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21331.html) and said in December 2025 that partners had already completed hundreds of secure, agent-initiated transactions. [PayPal put its MCP servers and Agent Toolkit in developers’ hands in April 2025](https://newsroom.paypal-corp.com/2025-04-29-PayPal-Launches-Agentic-Commerce-Services-to-Power-the-Future-of-Shopping), then moved from [Perplexity checkout](https://newsroom.paypal-corp.com/2025-11-PayPal-and-Perplexity-Launch-Instant-Buy) to a [ChatGPT commerce partnership](https://newsroom.paypal-corp.com/2025-10-28-OpenAI-and-PayPal-Team-Up-to-Power-Instant-Checkout-and-Agentic-Commerce-in-ChatGPT). [Mastercard launched Agent Pay in April 2025](https://www.mastercard.com/news/press/2025/april/mastercard-agent-pay/) and extended it in June 2026 to [Agent Pay for Machines](https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html), explicitly targeting high-frequency, low-latency, low-value transactions with guaranteed multi-rail settlement. 

That matters because **infrastructure adoption precedes interface adoption**. The winning companies will not just “let agents pay.” They will become the policy and trust layer that decides which agent may act, under whose authority, within which limits, on which rail, with which audit trail. [Visa’s own 2026 survey](https://corporate.visa.com/en/products/intelligent-commerce/earning-trust-report.html) is the tell: consumers are materially more comfortable with AI comparing prices than autonomously spending without limits, and large majorities want visibility, control, and approval gates. The commercial takeaway is straightforward: trust, permissions, and reversibility are not compliance overhead. They are the product. 

I also think investors are underestimating where the first durable revenue pools appear. Near term, the earliest real pain is not autonomous consumer shopping for sweaters. It is software buying APIs, compute, messaging, datasets, travel, deposits, and operational services without a human in the loop each time. Mastercard’s machine-payments framing, Skyfire’s micropayment stack, Nevermined’s per-call and delegated-card model, and Sapiom’s “one key” execution engine all point in the same direction: **machine commerce will start with high-frequency digital and operational transactions**. Consumer checkout will follow, but B2B and software-to-software flows get there first. 

So the thesis is not that every agent start-up wins. It is that a new control layer is being installed between models and money. When incumbents with global rails and younger infrastructure companies are simultaneously converging on identity, delegated authority, metering, orchestration, and settlement, I stop asking whether the category exists. I ask who owns the APIs, policy engine, and merchant surface before everyone else notices. 

## A few platforms to subscribe

| Startup | HQ | Core capability | Business model | Traction signal |
|---|---|---|---|---|
| Skyfire | San Francisco, US | Agent identity, checkout, and programmable payments for the open web | B2B infrastructure for access, checkout, and credentials | [Fastly integration](https://www.skyfire.xyz/blog/skyfire-and-fastly-partner-to-verify-ai-agents-at-the-edge); [Experian KYA framework integration](https://www.experian.com/blogs/news/2025/09/16/experian-and-skyfire-launch-know-your-agent-framework-for-ai-commerce/) |
| Nevermined | Zug, Switzerland | Usage-based agent payments, delegated card spend, fiat/crypto settlement | Usage-based platform and settlement layer | [Visa Intelligent Commerce + x402 integration](https://nevermined.ai/blog/nevermined-unlocks-autonomous-agent-card-payments-with-x402-opening-a-new-market-for-publishers-digital-merchants) |
| Sapiom | San Francisco, US | Execution engine that abstracts vendor accounts, credentials, billing, and spend | Usage-based access and orchestration layer | [“Powering agents in production”](https://www.sapiom.ai/); [$15.75M seed](https://www.sapiom.ai/blog/sapiom-raises-15m) |

Skyfire is building an **agent trust stack**: verified identity, login, and checkout for agents operating across websites and APIs. Its official materials say KYA tokens fit standard web infrastructure, and its integrations with Fastly and Experian show the company is targeting the trust layer before the payment layer fully scales. That matters because agents that cannot identify themselves cleanly will never become reliable economic actors. 

Nevermined is the clearest pure-play on **agent-native monetization**. Its platform supports per-call or session billing, fiat and crypto acceptance, MCP/A2A interfaces, and on-chain settlement; in April 2026 it announced an integration with Visa Intelligent Commerce, x402, and VGS so agents could buy digital goods and services under delegated card rules. That matters because it turns “AI as user” into a billable, governable commerce primitive. 

Sapiom is approaching the market from the **execution side** rather than checkout alone. The company says one key can replace vendor accounts, credentials, and billing relationships; its docs show per-use capabilities across compute, search, messaging, domains, and enrichment, with spend attribution and policy scoping built in. That matters because the fastest-growing agent economy may look less like shopping and more like automated procurement of digital services. 

## Early signals

<figure class="essay-deployment-photo">
  <img src="/assets/img/blog/agentic-commerce-landscape.webp" alt="Agentic commerce landscape across payment networks, agent-native platforms, and investable infrastructure layers" width="1400" height="760" loading="lazy" decoding="async">
  <figcaption>Agentic commerce is converging around payment networks, agent-native platforms, and policy-driven control planes.</figcaption>
</figure>

<div class="essay-example-grid" aria-label="Agentic transaction infrastructure examples">
  <article><h3>Visa Intelligent Commerce</h3><p>Tokenization, authorization, agent identity, and controlled spend for AI commerce.</p></article>
  <article><h3>PayPal Agent Toolkit</h3><p>Developer tooling, checkout orchestration, merchant routing, and post-purchase operations.</p></article>
  <article><h3>Mastercard Agent Pay</h3><p>Agentic payments, permissioning, tokenization, and machine-speed settlement.</p></article>
</div>


The first signal is **payment-network activation**. Visa launched Intelligent Commerce on April 30, 2025, then announced on December 18, 2025 that ecosystem partners had already completed hundreds of secure, agent-initiated transactions; by June 2026, Visa said its payment capabilities would be integrated into OpenAI experiences with tokenization, authorization, agent identification, and fraud monitoring underneath. That is not a lab demo. That is global-rail incumbency moving into agent execution. 

The second signal is **developer tooling plus distribution**. PayPal said in April 2025 that developers could use its MCP servers and Agent Toolkit immediately, then announced Perplexity-powered instant buy in May 2025 and a ChatGPT commerce partnership in October 2025, where PayPal would handle merchant routing, payment validation, and orchestration behind the scenes. The category is already moving from SDKs to channel distribution. 

The third signal is **machine-payment specialization**. [Mastercard launched Agent Pay in April 2025](https://www.mastercard.com/news/press/2025/april/mastercard-agent-pay/), then introduced [Agent Pay for Machines](https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html) in June 2026 with permissioning, orchestration, and machine-speed settlement; the company said more than 30 industry leaders were among the first to support adoption. Once incumbents carve out a separate architecture for low-value, continuous, machine-led commerce, the market is telling you the workload is real. 

## Projections

My base case is that **guardrailed delegation becomes the default product shape**. Visa’s research shows people are open to AI acting for them, but not without limits, approvals, and visibility; Visa and OpenAI both describe spending limits and approval thresholds as core controls. The commercial implication is that the winners in the next one to three years are more likely to look like policy engines and delegated-authority layers than “fully autonomous wallets.” 

My second projection is that **merchant and API access will consolidate into a small number of control planes**. PayPal is explicitly selling a single integration across multiple AI channels; Visa is offering integrated APIs and a commercial partner program; Mastercard is organizing a broad ecosystem around shared rules and settlement. In other words, this market has classic infrastructure economics: whoever brokers trust and routing across many surfaces gets the compounding advantage. This is an inference from current launches, not a certainty. 

My third projection is that **machine-led digital spend scales before mainstream consumer agent checkout**. Mastercard’s own framing emphasizes micro-, low-latency, high-frequency transactions; Skyfire emphasizes micropayments for APIs and services; Nevermined emphasizes per-call and session billing; Sapiom exposes compute, search, messaging, domains, and enrichment as paid primitives. The commercial implication is that the first durable revenue pools likely emerge in B2B software, data, and operations, where the ROI is measurable and the decision loop is easier to constrain. This too is an inference from the current product mix. 

## Investment checklist

When I evaluate a company in this category, I would ask five questions.

- Does it own **identity plus policy**, or is it merely a thin payment wrapper?
- Can it prove **delegated authority** with approval, spend, and audit controls?
- Does it sit on a compounding surface with **merchant, API, or model distribution**?
- Is pricing aligned to **usage, outcomes, or settlement volume** rather than seat count alone?
- If foundation models improve quickly, does the company become **more necessary**, not less?

That checklist follows directly from the market signals above: trust, controls, interoperability, usage pricing, and distribution are the load-bearing variables. 
