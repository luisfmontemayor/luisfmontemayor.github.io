# Product Requirements Document: Bioinformatics & Software Engineering Portfolio (v1.0.0)

## 1. Executive Summary
**Objective:** A high-agency, professional developer portfolio for a Bioinformatician and Software Engineer, with a specialized background in research, research engineering and full stack eng. The platform must communicate my complex background, technical versatility (Rust, Nextflow, PyTorch, R, etc), while showing a techy and quantified impact without either making it look too dorky, sci fi or falling into common "SaaS dark-mode" or "AI-generated" UI clichés. I would rather it looks more like a UX researcher's site than a discord server or a Halo 3 screenshot from a spaceship's dashboard

## 2. Target Audience
*   Technical Recruiters & Engineering Managers
*   Academic & Industrial Research Collaborators
*   Software Engineering Peers
*   People interested in my projects

## 3. Core Visual Identity
*   **Design Philosophy:** "Technical, Restrained, and Functional." A markdown simplicity aesthetic that prioritizes reasonable information density and structural clarity.
*   **Color Palette (as-built, light mode only — dark mode is deferred, see `todo.md`):**
    *   **Background:** Off-white / pale blue (`#f6fafe`), with pure white (`#ffffff`) for elevated surfaces.
    *   **Text:** Near-black (`#171c1f`) for primary text, slate gray (`#3d494c`) for secondary/body copy.
    *   **Accent:** Cyan (`#06b6d4` primary-container, `#00424f` on-primary-container) for interactive cues (nav-pill hover, primary buttons); a deeper cyan (`#0891b2`) for secondary highlights (Current Focus titles).
    *   **Borders/Neutral:** Light slate (`#bcc9cd`) for outlines and dividers; `#e4e9ed` for high-contrast surface fills.
*   **Typography:**
    *   **Monospace:** JetBrains Mono (used for the nameplate, nav labels, buttons, and technical badges).
    *   **Sans-Serif:** Geist (used for headings and body copy for maximum legibility).
*   **Layout Patterns:** Asymmetrical split intro (portrait + narrative + sidebar aside), and vertical timelines for chronological sections.

## 4. Site Architecture & Navigation
### 4.1. Global Shell
*   **Sticky Header:** Full-width top bar with the name as a wordmark/home link, a horizontal row of icon-only nav pills that expand to reveal a text label on hover/focus, and a primary "CV" download button.
*   **Mobile Drawer:** Below the `md` breakpoint the pill row collapses behind a hamburger toggle into a slide-down drawer with full-width text links.
*   **Simplified Footer:** Copyright line and a `build <short-sha>` link to the GitHub commit (stamped by CI; hidden in local previews where the token isn't substituted), plus small social icons (Scholar, LinkedIn, GitHub). No debug logs or "system payloads."

### 4.2. Page Architecture
The site is a **single scrolling page** (`index.html`) with in-page anchor navigation, not separate routed pages. Sections, in order:
*   **About** (`#about`): Intro headline, portrait, narrative copy, and a "Current Focus" aside list (Job Hunt, Freelance Work, ALS & cfDNA, Scientific Computing).
*   **Employment** (`#employment`): Reverse-chronological vertical timeline of roles.
*   **Research** (`#research`): Vertical timeline of academic research positions.
*   **Builds** (`#builds`): A grid of project cards (title, description, tech tags). Currently static text — no Knowledge Base or Release Timeline yet (see `todo.md`).
*   **Education** (`#education`): Vertical timeline of degrees.
*   **Contact** (`#contact`): Short prompt plus a bordered row list (Email, GitHub, LinkedIn, Google Scholar), each row an icon/label/value triple with a hover-animated outward arrow. The email row carries no address in the served HTML; it is assembled client-side from CI-injected halves (see `README.md`). LinkedIn and Google Scholar are still placeholders (see `todo.md`).
*   There is no standalone Tech Stack section yet; tech is only surfaced as tags on Build cards (see `todo.md`).

## 5. Technical Constraints & Anti-Patterns
*   **No Clichés:** No cyan-to-purple gradients, no excessive glassmorphism, no emoji-in-pill badges.
*   **No "Git-ification" of Personal History:** Avoid commit hashes, branches, or tags on the Experience page (reserve for Builds/Releases only).
*   **Responsive Integrity:** All technical logs and code blocks must handle overflow gracefully with horizontal scrolling.
*   **Video game-like features:** cannot have a hero's logo, metrics of the system as if my static site was a spaceship or HPC cluster, etc
*   **No variable-name labels:** all reader-facing labels, headings, and category tags must be full human-readable words (e.g. "Scientific Computing", "Job Hunt"), never code-style identifiers such as `SCI_COMPUTE`, `JOB_HUNT`, `camelCase`, or `snake_case`. Monospace styling stays, but it decorates prose, it does not turn labels into source tokens. The only permitted code-style strings are genuine technical artifacts (version tags like `[v1.0.4]`, commit references, tech/tool names).

## 6. Component Library
*   **NavPill:** Icon-only circular header link that expands into a filled pill with a text label on hover/focus.
*   **BuildCard:** Bordered container (title, description, tech-tag pills) with a hover border accent.
*   **TimelineRow:** Rail + dot marker connected to a bordered card, used across Employment, Research, and Education.
*   **FocusItem:** Left-bordered label/description pair used in the About sidebar.
*   **ContactRow:** Full-width bordered list row pairing an icon + label with a value and a hover-animated outward arrow, used for every channel in the Contact section.
*   **TechStackCard with version badges (`[v1.0.4]`), MetricPanel, and ProcessFlow are not yet implemented** — see `todo.md` for deferred component work.
