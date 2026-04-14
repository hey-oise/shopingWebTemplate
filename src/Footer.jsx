const contact = [{
  name: "email",
  link: 'mailto:oise.giwa.okugbe@gmail.com'
},
{
  name: "telegram",
  link: 'https://t.me/oise'
},
{
  name: "whatsapp",
  link: 'https://wa.me/2347073722840'
},
];
const socials = [{
  name: "tiktok",
  link: 'https://tiktok.com'
},
{
  name: "twiter/X",
  link: 'https://x.com'
},
{
  name: "instagram",
  link: 'https://ig.com'
},
  
{
  name: "youtube",
  link: 'https://yt.com'
},
  
{
  name: "facebook",
  link: 'https://fb.com'
},
{
  name: "discord",
  link: 'https://discord.com'
},
];
const devSocials = [{
  name: "tiktok",
  link: 'https://tiktok.com'
},
{
  name: "whatsapp",
  link: 'https://wa.me'
  },
  {
    name: "telegram",
    link: 'https://tg.com'
  },
  
  {
    name: "twitter/x",
    link: 'https://x.com'
  },
  
  {
    name: "instagram",
    link: 'https://ig.com'
  },
]
  function FooterLink({values}) {
    return (
      values.map(value => <a class="footerLinks" href={value.link}>{value.name}</a>)
  )
}
export default function Footer() {
  return (
    <footer id="footer">
      <div className="contacts">
        <h2>contact us</h2>
        <FooterLink values={contact} />
      </div>
      <div className="contacts">
        <h2>get in touch</h2>
        <FooterLink values={socials} />
      </div>
      <div className="contacts">
        <h2>contact developer</h2>
        <FooterLink values={devSocials} />
      </div>
      <div className="lastPart">
        <p>©2026 all rights reserved</p>
        <p>built with ❤️</p>
        
      </div>
    </footer>
  )
}