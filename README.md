# Stanford Lean AI Club — Website

Next.js website for the Stanford Lean AI Club, including the public blog.

## Blog Post Workflow

Blog posts are written through an **experiments → posts** pipeline:

1. **Create an experiment folder** for the post under `experiments/NN_<slug>/`:
   ```
   experiments/
     00_claude_code_workflow_snap_cluster/
       README.md          # topic, status, key angles
       drafts/            # v1.md, v2.md, final.md
       prompts/           # LLM prompts used to draft/refine
       figures/           # images, diagrams
       scripts/           # any automation
       transcripts/
         transcript_raw.txt              # raw/informal — NOT tracked by git (.gitignore)
         transcript_zoom_companion.txt   # Zoom auto-generated summary — tracked
         transcript_summary_notes.txt    # curated technical notes for drafting — tracked
   ```
2. **Draft** in `drafts/` using **all 3 transcripts** as inputs: raw, zoom companion, and summary notes. Do not draft from summary notes alone — the raw and zoom transcripts contain details that don't make it into the summary.
3. **Review** via PR — assign relevant club members to approve before publishing.
4. **Add citation** at the end of every post in BibTeX format:
   ```bibtex
   @misc{firstauthorYYYYslug,
     author={Full Name and Full Name and ...},
     title={Post Title},
     year={YYYY},
     howpublished={Stanford Lean {AI} Club Blog},
     url={TODO: add final URL once live},
   }
   ```
5. **Publish** by copying the final `.md` into `posts/` with proper YAML frontmatter (`title`, `date`, `description`).
5. **Promote** once the post is live:
   - **Twitter (required):** post a thread or short announcement linking to the blog post — [@StanfordLeanAI](https://x.com/StanfordLeanAI).
   - **YouTube (optional):** if the session was recorded as a video, upload it and link it from the blog post.

**Numbering:** experiments are prefixed `00_`, `01_`, `02_`, ... in creation order.

**Privacy:** `transcript_raw.txt` files are gitignored (may contain informal/unedited content). Only `transcript_zoom_companion.txt` is committed.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). See the **Deployment** section below for how production pushes reach https://aiforlean.org.

## Deployment (aiforlean.org)

The public site at **https://aiforlean.org** is hosted on **Vercel**. Every push to `main` is supposed to trigger a production deploy via the GitHub ↔ Vercel integration. If that integration is disconnected or the project is paused, pushes to `main` will silently stop appearing on the live site (symptom: `curl -sI https://aiforlean.org/` shows a very large `age:` header, meaning the cached response is days/weeks old).

### Verify a deploy landed

After pushing to `main`, confirm the site updated:

```bash
# 1. Check the live HTML actually contains your change
curl -s https://aiforlean.org/about | grep -o "Founder & President"

# 2. Check how old the Vercel response is — should be seconds/minutes, not days
curl -sI https://aiforlean.org/ | grep -iE "^age:|x-vercel-"
```

If `age:` is larger than a few hundred seconds and your change is missing, the deployment did not rebuild. **Do not rely on "it's on main" — always verify against the live URL.**

### If the site is stale

In order of effort:

1. **Manual redeploy (fastest):** in the Vercel dashboard → project → **Deployments** → latest commit on `main` → **⋯ → Redeploy**. Untick "Use existing Build Cache" if a config changed.
2. **Vercel CLI (from a local checkout, requires `vercel login`):**
   ```bash
   npm i -g vercel
   vercel link          # one-time, pick the existing project
   vercel --prod        # build and promote to production
   ```
3. **Fix the GitHub integration (root cause):** Vercel dashboard → project → **Settings → Git** → confirm the repo is connected and the production branch is `main`. If not, reconnect. Check **Settings → Deployment Protection** and any **Spending / Usage** limits that can pause auto-deploys on the Hobby plan.
4. **Check the webhook is firing:** GitHub repo → **Settings → Webhooks** → the Vercel webhook should show recent `200` deliveries. Red/failed deliveries point to an integration that needs reconnecting.

### Making this harder to break

- Keep the Vercel project owned by a team/club account, not a single student — personal accounts get disconnected when people graduate.
- After any change to Vercel project settings (domain, env var, git branch), push a trivial commit and verify with the `curl` checks above.
- If multiple people might deploy, add Vercel CLI auth to a shared password manager so anyone can run `vercel --prod` as a fallback.

### Local development

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build (matches what Vercel runs)
npm run lint
```
