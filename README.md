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

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
