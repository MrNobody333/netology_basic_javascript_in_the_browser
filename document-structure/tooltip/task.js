const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(el => {
  el.addEventListener('click', e => {
    const tooltip = document.createElement('div');
    tooltip.textContent = el.getAttribute('title');
    tooltip.classList.add('tooltip');
    
    document.querySelectorAll('.tooltip').forEach(el => {
      el.remove();
    });
    
    document.body.appendChild(tooltip);

    let coords = el.getBoundingClientRect();
    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = coords.bottom + 'px';
    tooltip.style.opacity = '1';
    
    e.preventDefault();
  });
});