---
title: how i feel around ai
published: 2026-11-07
description: 'This post talks about the undergoing trend of AI in the field of programming. Where old times required us to put hours into different tasks and learning are being replaced by new ones where anything can be built in minutes, I wanted to express my voice and concern around it'
image: 'https://safebooru.org//images/3882/2cfda7119eceb47f9f7d240fcc7ba6b4c4186a42.jpg'
tags: ['ai', 'critics', 'open-source']
category: 'tech'
draft: false
lang: 'en'
---

*Image Credit: [wounds404](<https://www.pixiv.net/en/users/38278168>) - <https://x.com/wounds404/status/1836042148262846795>*

## Background

I currently have another blog post stalled, regarding one of my latest ongoing project, called `Ragers`.
It is basically just a CLI tool in Rust I've started writing for both fun, learning, and because I needed a specific thing that wasn't currently satisfying my in the development environment: to easily encrypt certain files in a repository easily.

The code is hosted at Codeberg: <https://codeberg.org/Sutaai/Ragers>. It's an alternative to GitHub. I've decided to move away from GitHub after my account got suddenly restricted by GitHub months ago, for no reasons, and my first ticket went unanswered for weeks. It is also a much more respective to my personal opinions. One being AI.

The reason why I explain all of this is because of one dev dependency in this project.
In Ragers's codebase (and also the one of this blog, and honestly, many of my other projects), I make use of a tool called `mise`, or `mise-en-place`, developed by [Jeff Dickey](<https://github.com/jdx>) (alias jdx) and sole full-time maintainer.

:::note
I just want to mention, for clarity, that I am not making this post in response to the support I've received in jdx's Discord server that, in my opinion, was very dismisive. It's unrelated, I would have done it anyway. That is, it's only mentioned for not mixing things up. There's no vengance of any sort.
:::

`mise` has been my go-to tool to easily install requirements for different projects without having to install system-wide programs that I wasn't wishing for, or that could have caused conflict. Python is the most problematic example: certain packages in a system will require a specific version of Python, while your project need another, and conflict could arise on install (a solution is a virtual environment, but that's out of score of this write-up, all that matter is that `mise` makes it real easy).
I used it as a replacement to [`asdf`](<https://asdf-vm.com/>), which felt very difficult to use at time and was very confusing. It has been years since I've used `asdf`, it might have changed, I never gave it a second chance considering `mise` has always been a real good tool at its job.
I also very dislike the philosophy of plugins used by `asdf`, which `mise` does not relate to entirely.

Now, when I started setting up `mise` in `Ragers` for the first time and I was going through the documentation of `mise`, something stood out to me: `mise` had evolved. Like any programs, you'll tell me. But it's grown into something more. `mise` used to simply be a `mise.toml` in your project's root to define tools and your regular tasks. But today, it's also a tool to manage your machines/dotfiles and "daemons".

Such features are not something I am looking for in `mise`, I just wanted a tool that could help me setup my stuff in my projects. In my opinion, those new features are not in line with what `mise` is supposed to be at its core. [`chezmoi`](<https://www.chezmoi.io/>) would perfectly fit the job of managing my dotfiles/bootstraping my machines, not mise.
Obviously, I am not the maintainer, and I don't get to decide what's added, what's not, but that raised me the question of how is `mise` developed. The answer was unsurprising.

## The secret behind `mise`'s magic

I think it's clear we can say that jdx clearly praise AI. From extremely discutable [promotions videos](<https://mise.jdx.dev/mise-en-place.html>) for their projects to [entirely vibe-coded commits in one day making up for a release with ~5k lines of changes](<https://github.com/jdx/mise/compare/v2026.11.2...v2026.11.3>), there's no room to say AI isn't embraced and used to fuel mise's maintenance and new features.
Particularly, this comparison of `2026.11.2` with `2026.11.3` of mise really got me as I realized how much can AI do in a single day, and how it drives software development forward.

When I look at the commits (not the code), I simply realize there is quite an uncertainty that the pushed code really was reviewed the same a human would have done it. Is it really trustworthy? Was the added features really worth it? Was it requested or simply some more features out of the blue? Is there even some human code in there, or was it fully made by a thin-can?

Fair to say, those questions have already been asked long ago by smarter peoples than me. I'm just here to add one personnal mark to this maze that is our current situation with AI.

## The comparison with my current project.

When you compare `Ragers` to `mise`, you can see a huge difference. My commits are pretty tiny, "disorganized" in the sense that I don't commit daily (I also have other stuff to do beside programming), and are generally kept under 1k of line diff in a day. I saw an average of ~300 lines per feature commits, and it is quite rare I add a comment to my commits unless I gotta point specific new behaviors or breaking changes, or jokes.

On the other hand, `mise` seems to do very daily commits (and releases!!), features commit seems to be around +1k lines diff, all of their commits contain bible-long comments, and are co-authored with [Claude](<https://github.com/claude>), and I spotted some CodeRabbit too.

Needless to say, compared to jdx, my work/commits looks like a junior just started out in programming and are learning about the fundamentals and I have a hell-lot to catch up to. When you see such things, that feels very discouraging.

### Reason(s) why I don't go as fast

I don't use AI as a driver for Ragers. At all. The only time I've used it in an advanced way, was at the very beginning of Ragers, when I wanted a first implementation that, at least, worked, with dirty code. I was a bit stuck on something, so I just asked Claude "Hey, please finish this logic for me". What Claude wrote were those lines only: <https://codeberg.org/Sutaai/Ragers/src/commit/599678aaca7dcb1fc7e2d20ec767edd91c4691ed/src/cli.rs#L224-L305>

And that is all that I've vibe-coded on Ragers. After the initial implementation was done, I've entirely rewrote it, by hands, without AI. All I wanted was a fundation I could work on, and AI gave me that, it helped me as an assistant against something I was stuck on.

And the reason I was stuck was: I was/I am learning Rust. I am not fluent to Rust. All the Rust I've learned is only thanks to Ragers. I now understand the way it works, the reasons why certains things are working a certain way, the syntax, the subtilities, and I would be able to create a new project from scratch with Rust (I was thinking of something recently too). I am capable, I've learned, it was difficult, and it took me months. Coming from Python, there was a lot to learn indeed.
It brought me much happiness and reassurance to have learned a new language almost entirely by myself using [the Rust book](<https://doc.rust-lang.org/book/>) and cargo docs. I would never trade the knowledge I've learned and the difficult path I've took for an AI that could do it in the blink of an eye.

But when you are a learner such as I am, how are you supposed to feel to someone else's just basiscally cheating on the system, using AI, and making stuff in days that you'd need to do in months because it goes way further than just writing code: planning, problem-solving, refactoring, are very crucial parts. And AI does that in a second, just for you. But you ain't learning much, you're just letting someone else do your job. Instead of being a developer, you are a reviewer of prompt's answers. That title gives "mechanical dummie" vibes.

I still would be very much happy if Ragers could have been done in days and I could use it instantly with all the features I have in mind, and just go forward on my other projects, but the process of actually developing is crucial to training my brain and retaining my capacities of doing things by myself, having reasonable thinking about how I do things, and remain steady on what I taught myself.

---

Recently, we've seen speculation of the AI bubble starting to pop: stock market are dipping in the red, companies are going bankrupt (fron what I've heard)... It's an interesting time right now.

![A screenshot from FinViz representing the stock market of artifical intelligence losing -20% in three months performance](<./ai-popping-out.png>)

This screenshot shows how much AI has lost over the last three months. It's not limited to AI, but it is a good sign nonetheless. I'm not gonna pretend I was on the news nor I am exactly aware of what happened at that time, but I see the facts: AI, computing, anything related to technology, took a dip recently. Something I personally appreciate and hope to see burst more.

To see the [peoples kill themselves](<http://www.youtube.com/watch?v=jpXJjZUaoSk>) silently hurts me.

---

This blog is <https://brainmade.org/>. So are my projects.

And I might hate AI.
