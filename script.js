// // ---------- Language toggle ----------
// try {
//   const body = document.body;
//   const btnEn = document.getElementById('btnEn');
//   const btnAr = document.getElementById('btnAr');

//   function setLang(lang){
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
//     body.classList.toggle('lang-ar', lang === 'ar');
//     body.classList.toggle('lang-en', lang === 'en');
//     btnEn.classList.toggle('active', lang === 'en');
//     btnAr.classList.toggle('active', lang === 'ar');
//     document.querySelectorAll('.i18n').forEach(el=>{
//       el.textContent = el.getAttribute('data-'+lang);
//     });
//     document.querySelectorAll('.i18n-ph').forEach(el=>{
//       el.setAttribute('placeholder', el.getAttribute('data-'+lang));
//     });
//   }
//   btnEn.addEventListener('click', ()=>setLang('en'));
//   btnAr.addEventListener('click', ()=>setLang('ar'));
// } catch (err) {
//   console.error('Language toggle failed to initialize:', err);
// }

// // ---------- Dark / Light theme toggle ----------
// try {
//   const btnDark = document.getElementById('btnDark');
//   const btnLight = document.getElementById('btnLight');
//   function setTheme(theme){
//     document.documentElement.setAttribute('data-theme', theme);
//     btnDark.classList.toggle('active', theme === 'dark');
//     btnLight.classList.toggle('active', theme === 'light');
//   }
//   btnDark.addEventListener('click', ()=>setTheme('dark'));
//   btnLight.addEventListener('click', ()=>setTheme('light'));
// } catch (err) {
//   console.error('Theme toggle failed to initialize:', err);
// }

// // ---------- Mobile menu ----------
// try {
//   const burger = document.getElementById('burger');
//   const navLinks = document.getElementById('navLinks');
//   burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
//   navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>navLinks.classList.remove('open')));
// } catch (err) {
//   console.error('Mobile menu failed to initialize:', err);
// }

// // ---------- Active nav link on scroll ----------
// try {
//   const sections = document.querySelectorAll('section[id]');
//   const navA = document.querySelectorAll('.nav-links a');
//   const navObserver = new IntersectionObserver((entries)=>{
//     entries.forEach(entry=>{
//       if(entry.isIntersecting){
//         navA.forEach(a=>a.classList.remove('active'));
//         const link = document.querySelector('.nav-links a[href="#'+entry.target.id+'"]');
//         if(link) link.classList.add('active');
//       }
//     });
//   }, {rootMargin:'-45% 0px -50% 0px'});
//   sections.forEach(s=>navObserver.observe(s));
// } catch (err) {
//   console.error('Active nav-on-scroll failed to initialize:', err);
// }

// // ---------- Reveal + progress bars ----------
// try {
//   const revealTargets = document.querySelectorAll('.reveal, .skill-card, .proj-card, .about-photo');
//   const revealObserver = new IntersectionObserver((entries)=>{
//     entries.forEach(entry=>{
//       if(entry.isIntersecting){
//         entry.target.classList.add('in');
//         entry.target.style.opacity = 1;
//         entry.target.style.transform = 'none';
//         const bar = entry.target.querySelector('.bar-fill');
//         if(bar) bar.style.width = bar.getAttribute('data-pct')+'%';
//         revealObserver.unobserve(entry.target);
//       }
//     });
//   }, {threshold:.2});
//   revealTargets.forEach(t=>revealObserver.observe(t));
// } catch (err) {
//   console.error('Reveal animations failed to initialize:', err);
// }

// // ---------- Contact form (saves to database via submit.php) ----------
// try {
//   const contactForm = document.getElementById('contactForm');
//   const formMsg = document.getElementById('formMsg');
//   contactForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const inputs = contactForm.querySelectorAll('input, textarea');
//     const payload = {
//       name: inputs[0].value,
//       email: inputs[1].value,
//       message: inputs[2].value
//     };
//     fetch('submit.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     })
//     .then(res => res.json())
//     .then(data => {
//       if(data.success){
//         formMsg.style.display = 'block';
//         contactForm.reset();
//       } else {
//         alert(data.error || 'Something went wrong, please try again.');
//       }
//     })
//     .catch(() => {
//       alert('Could not reach the server. Make sure XAMPP is running.');
//     });
//   });
// } catch (err) {
//   console.error('Contact form failed to initialize:', err);
// }

// // ---------- Carousels ----------
// try {
//   document.querySelectorAll('.car-btn').forEach(btn=>{
//     btn.addEventListener('click', ()=>{
//       const car = document.getElementById(btn.getAttribute('data-target'));
//       const dir = btn.classList.contains('car-next') ? 1 : -1;
//       const sign = document.documentElement.dir === 'rtl' ? -1 : 1;
//       car.scrollBy({left: dir*sign*320, behavior:'smooth'});
//     });
//   });
// } catch (err) {
//   console.error('Carousel buttons failed to initialize:', err);



// }
// ---------- Language toggle ----------
try {
  const body = document.body;
  const btnEn = document.getElementById('btnEn');
  const btnAr = document.getElementById('btnAr');

  function setLang(lang){
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    body.classList.toggle('lang-ar', lang === 'ar');
    body.classList.toggle('lang-en', lang === 'en');
    btnEn.classList.toggle('active', lang === 'en');
    btnAr.classList.toggle('active', lang === 'ar');
    document.querySelectorAll('.i18n').forEach(el=>{
      el.textContent = el.getAttribute('data-'+lang);
    });
    document.querySelectorAll('.i18n-ph').forEach(el=>{
      el.setAttribute('placeholder', el.getAttribute('data-'+lang));
    });
  }
  btnEn.addEventListener('click', ()=>setLang('en'));
  btnAr.addEventListener('click', ()=>setLang('ar'));
} catch (err) {
  console.error('Language toggle failed to initialize:', err);
}

// ---------- Dark / Light theme toggle ----------
try {
  const btnDark = document.getElementById('btnDark');
  const btnLight = document.getElementById('btnLight');
  function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    btnDark.classList.toggle('active', theme === 'dark');
    btnLight.classList.toggle('active', theme === 'light');
  }
  btnDark.addEventListener('click', ()=>setTheme('dark'));
  btnLight.addEventListener('click', ()=>setTheme('light'));
} catch (err) {
  console.error('Theme toggle failed to initialize:', err);
}

// ---------- Mobile menu ----------
try {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>navLinks.classList.remove('open')));
} catch (err) {
  console.error('Mobile menu failed to initialize:', err);
}

// ---------- Active nav link on scroll ----------
try {
  const sections = document.querySelectorAll('section[id]');
  const navA = document.querySelectorAll('.nav-links a');
  const navObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        navA.forEach(a=>a.classList.remove('active'));
        const link = document.querySelector('.nav-links a[href="#'+entry.target.id+'"]');
        if(link) link.classList.add('active');
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  sections.forEach(s=>navObserver.observe(s));
} catch (err) {
  console.error('Active nav-on-scroll failed to initialize:', err);
}

// ---------- Reveal + progress bars ----------
try {
  const revealTargets = document.querySelectorAll('.reveal, .skill-card, .proj-card, .about-photo');
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'none';
        const bar = entry.target.querySelector('.bar-fill');
        if(bar) bar.style.width = bar.getAttribute('data-pct')+'%';
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.2});
  revealTargets.forEach(t=>revealObserver.observe(t));
} catch (err) {
  console.error('Reveal animations failed to initialize:', err);
}

// ---------- Contact form (saves to database via submit.php) ----------
try {
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  const msgText = {
    success: { en: 'Thanks! Your message has been sent.', ar: 'شكرًا! تم إرسال طلبك.' },
    error:   { en: 'Sorry, your message was not sent. There is a problem with the server.', ar: 'عفوًا! لم يتم إرسال طلبك. يوجد مشكلة في الخادم.' }
  };

  function showFormMsg(type){
    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    formMsg.textContent = msgText[type][lang];
    formMsg.style.color = type === 'success' ? '#A8977C' : '#e05252';
    formMsg.style.display = 'block';
  }

  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const inputs = contactForm.querySelectorAll('input, textarea');
    const payload = {
      name: inputs[0].value,
      email: inputs[1].value,
      message: inputs[2].value
    };
    fetch('submit.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        showFormMsg('success');
        contactForm.reset();
      } else {
        showFormMsg('error');
      }
    })
    .catch(() => {
      showFormMsg('error');
    });
  });
} catch (err) {
  console.error('Contact form failed to initialize:', err);
}

// ---------- Carousels ----------
try {
  document.querySelectorAll('.car-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const car = document.getElementById(btn.getAttribute('data-target'));
      const dir = btn.classList.contains('car-next') ? 1 : -1;
      const sign = document.documentElement.dir === 'rtl' ? -1 : 1;
      car.scrollBy({left: dir*sign*320, behavior:'smooth'});
    });
  });
} catch (err) {
  console.error('Carousel buttons failed to initialize:', err);
}