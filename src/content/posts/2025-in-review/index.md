---
title: 2025 in review
published: 2025-12-04
description: A review of 2025, what changed, what was improved, and some stuff. Let's talk about my studies, tech, political life, and many other things.
image: 'banner.jpg'
tags: ["life", "years in review"]
category: personal
draft: true
lang: en
---

*Image Credit: [あすてろid](https://www.pixiv.net/en/users/2033916) - <https://www.pixiv.net/en/artworks/123427390>*

Now is time for the most wonderful time of the year, and another blog post: 2025 is soon to turn to an end. Time for some additional, very necessary writing on this blog.

I had many wishes to write on my blog, but I genuinely ***DON'T HAVE TIME***, I get busy by so many others things and project, and it's only stressful not to focus on work.
So I'm glad to finally write up a little more after an *(almost)* year of silence.

Perhaps I'll have time to write some more additional words during next year! No promises are held.

On others news, I'll give credit where due: I am once again making a post thanks to [Frank Ruan](https://frank-ruan.com/)'s blog whose inspired me. This is an exercise of wrapping things up of everything that happened and encapsulate it in some words. This sure will be inspiring for my future self to review my past actions!

To sum up this post, there isn't much to say, I'll say a lot, some interesting, some not. Have fun reading!

## Technology

### Personal setup

#### Stuff I bought

This year has been a little boring regarding my tech-related gear, but there are a few key points still:

- Camera: [Nikon Zfc](<https://imaging.nikon.com/imaging/lineup/mirrorless/z_fc/>)

I have *very* recently bought myself a brand new camera for photography. Very honestly, I bought this one mainly due to his look, not his performance. I wanted that one, it was cheap, so why not?
Even if this is an APS-C sensor for 20MP photos, it is still a great entry-level camera. I have learned a lot from it already in not even two weeks of usage.

It came in a bundle with two lenses (and the mainframe):

1. Standard [NIKKOR Z DX 16-50mm f/3.5-6.3 VR](<https://www.nikon.fr/fr_FR/product/lenses/mirrorless/nikkor-z-dx-16-50mm-f3.5-6.3-vr>)
2. Telescopic [NIKKOR Z DX 50‑250mm f/4.5‑6.3 VR](<https://www.nikon.fr/fr_FR/product/lenses/mirrorless/nikkor-z-dx-50-250mm-f4.5-6.3-vr>)

It was a steal for the price I bought it. I am ***EXTREMELY*** interested to make it a professional business and take advantage of the knowledge I took from it.

From my recent usage, I already took what I'd consider high quality pictures and very much like the results.

![Photo taken from the graduation ceremony event of 2025](<Graduation Ceremony.jpg>)
![Food photo from graduation ceremony (2025)](<Food photo from graduation ceremony.jpg>)
![A picture of an otter in the wild land of my university](<An otter.jpg>)

*as I'm writing this, explorer.exe crashed on me five times while simply drag-n-dropping. Congrats, Windows.*

- KVM: [JetKVM](<https://jetkvm.com/>)

  I have very recently bought this little piece after lot of frustrating experience with my PC during remote connection. I haven't been using it yet, but perhaps will either update this page or talk about it next year. (Doesn't deserve its own blog page)

- Firewall (Appliance): [Protecli Vault V1210](<https://protectli.com/vault-2-port/>) (with [OPNsense](<https://opnsense.org/>))

  I have since very long been interested to have my own firewall/router and not only depend on my ISP's router, OPNsense is the ideal OS I have been looking for to that matter.
  During the beginning of 2025, I had switched to Bouygues Telecom, which had a TERRIBLE router, almost unusable and forced DNS configuration. I so decided to go back to [Free](https://free.fr), even if that meant paying +10€/month. (They later had a similar plan pricing as Bouygues, so the pricing was equal).
  My ISP's router has been set to bridge mode, and so my OPNsense router (Named "Fire") directly claim the public IP. This pretty much total freedom of what I can do with my Internet connection. I could talk about it in my blog post some days.

- AP: [UniFi U7 Lite](<https://store.ui.com/us/en/products/u7-lite>)

  Using the bridge mode of my ISP's router meant that I would lose its built-in Wi-Fi. I had to choose for an AP, and UniFi was quite an obvious as this is a brand we use at work, has been pretty reliable, has built-in OTA updates, and allow for many cool features.
  I plan on using Ubiquiti's products more and more as my tech needs grows up.

##### An update on: OnePlus Watch 2R

Last year, I talked about the OnePlus Watch 2R, my new electronic watch. I had a great experiences with connected watches, I had owned multiples, but never had issues with any of them in general.

However, the OnePlus Watch 2R has a major inconvenience for me: *it burns through my skin*.

I genuinely doubt this is an allergic reaction, but wearing the watch for too long would expose my skin to discomfort, and so I scratch my arm, and so it irritate even more and degrade.
I very suspect the heart monitor to be at the cause, and truly wonder how could this happen, but I felt the need to specify it.

This might also be cause of not letting the skin breath for an extended period of time. I have taken it back recently and see how it goes.

### Server setup

Last year, I had talked about my new server I rent at Hetzner, I had exposed what services do I host, but this dramatically changed too, not only what I host but also in the way I deploy them.

#### What services do I host now?

Last year, I had reported hosting 11 services, I now host 13 for regular uses. Here are some highlights:

- [Actual](<https://www.actualbudget.com/>): Budget management. I have been using this app to track my budget, but I've been terrible to manage it. I'm considering moving to [Sure](<https://github.com/we-promise/sure>), now that it seems more mature since its forking.
- [Authentik](<https://goauthentik.io/>): IDP and IAM. All I care for is to have my user in a central place. Authentik is a RAM glutton, I am looking forward to replace it by [KanIDM](<https://kanidm.com/>).
- [Caddy](<https://caddyserver.com/>): Reverse proxy, moved to a container, see <https://github.com/Sutaai/deployments/>.
- [Jotty](<https://jotty.page/>): Task management, my replacement to [Vikunja](<https://vikunja.io/>). Very simple and straightforward, it can both handle my notes and checklists, but I am still keeping my notes in Outline.
- [Navidrome](<https://navidrome.org/>): Music server (along with [beets](<https://beets.io/>), no jokes), probably my most proud service I host today: As Spotify is slowly turning to sh*t, hosting my own music server had never been so interesting before. It feels much better to have my own collection with what I want inside it. One day, I'll make a blog post about it. Currently attempting to stick [Lidarr](<https://lidarr.audio/>) on top.
- [Outline](<https://github.com/outline/outline>): Wiki/Note gathering, I use it to store my notes in a more organized way, but I very dislike its use of the [BSL license](<https://en.wikipedia.org/wiki/Business_Source_License>) I despise so much. Sadly, its the only good wiki I've seen recently.
- [Papra](<https://github.com/papra-hq/papra>): Document management, in addition to Paperless-ngx (that I have NOT replaced), I use Papra to store documents I wish to only keep aside, and not in my "Downloads" folder of my computer.
- [SFTPGo](<https://github.com/drakkan/sftpgo>): File server. This was originally used for my e-ink tablet, It has been deprecated already while writing those lines.
- [Shlink](<https://shlink.io/>): URL shortening. Short URL. lol. But I don't really use it to be honest. Has a few hits. (and it's go, I hate go, I very much hate go, hear me topi? :) /s)
- [Syncthing](<https://syncthing.net/>): Document sync, this one was long overdue, and it's been much more easy than I ever thought, my only regret was not to install it sooner, consider how well it work.

I'm still changing stacks very regularly and have this, more or less, bad tendency to change an app because that or this doesn't please me.

## Studies

2025 has been a mitigated year regarding my studies. Peoples have seen me changes during that time too, but that is a touchy subject.

Not only that, but it has also been where I spent 3 whole months at work (apprenticeship). And it made me realize how much I'll probably not last in the branch of technology.
In the recent months, I have wished only more and more to do something more creative, more ambitious, more traditional and less *connected*. Photography stumbled upon my hands right at this time it seems.

Whatsoever, I don't have anything interesting to report about my current job, beside the fact that I'm leaving next year as per my contract and that I am likely to continue my studies for an engineer diploma, ONLY AFTER a year of pause ([Année de césure](<https://www.parcoursup.gouv.fr/faq/thematiques/autres-sujets/demande-de-cesure>)).

But if I don't keep up in this field, will it still be an interesting thing to bet on?
Also, my point of view on studies and work has recently shifted to something more critical, making me reconsider if keeping up with studies is worth it for my field of work.

### Politics

Ah, yes, something to add is how my point of view on politics has shifted dramatically too.

I used to claim being apolitical, not caring about it, which I wasn't. But recently, I have been way, WAY more active in my local student union.
I have never been more proud to be a progressive person that wish the best for everyone and help everybody, and to be a liberal (Not radical/far left).

I've had a little time to consider working in that field. Perhaps, but it's definitively not a main goal in my life.

## Personal life

I've personally grown up a little in my head and also a lot physically. Many things have changed for me, in a good way.

I had a few breakdown period over the year but it was nothing as dramatic as last years, and it's an overall enormous progress for me. This only translate to my mental state being better.
I also took more time to reflect on myself and thinking about me only. This exercise has been important and personal, I have no advice for anybody on how to tackle this.

Also, it appears I've switched from being an introvert person to turning more and more extravert. I took notice of this quite recently, and this is feeling quite good! I feel like I have some superpower in me!
This feels kinda new, and making myself realize I can break people's social shell is definitively a dangerous power, but that can be of great help.

### Friendship

I'd like to also take a little time to talk about friendship and their evolution. *(That sounds really deep and philosophical)*

Over the year, I had downs and ups. I've met peoples, I've lost them, some close, some *not so close*, hell, even a few days before writing this.

In general, I have noticed that the number of peoples in my social circle never really change: it stick around 10 close peoples, approximately, no matter what happens to peoples inside of it. (And then there's not-so-close peoples)

I had a very, personal, toxic behavior of feeling close to someone WAY too quickly, and not only is this something I've "fixed", it also helped me very much being more critical on the relationship I develop.
If someone doesn't like me, well that's about it, I can be heartbroken for some time, but I'll never bear with it forever in my mind, and it won't degrade my sanity or my emotions **too much**. I am more resistant, and that's not a bad thing.

Being resistant to breakups is something important. It doesn't mean [you are heartless or you have no emotions](<https://ifunny.co/picture/remain-emotionless-through-the-suffering-c6E0aWes9>), it just means you're able to overcome human challenges and to just... go on forward!
As long as you're not alone, you're likely up to something good in the long run.

And if you happen to be alone, well, perhaps the problem is you and you should reconsider your previous mistakes and work on it. That happen. Growing up isn't just in your early 20s and before, it's at all ages.

All of this to say that even if I lost a very long-time, I didn't really took it too badly to heart. I'm able to move on and seek the future and potential new friendship I'll make along the way.
Life won't stop putting new relationship in your life. Unless you decide to.

## Conclusion
