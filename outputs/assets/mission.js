document.documentElement.classList.add('js-ready');
const progress = document.createElement('div');
progress.className = 'progress';
document.body.append(progress);
const updateProgress = () => { const scrollable = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${scrollable ? (scrollY / scrollable) * 100 : 0}%`; };
addEventListener('scroll', updateProgress, { passive: true }); updateProgress();
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('section .wrap').forEach(item => { item.classList.add('reveal'); observer.observe(item); });
