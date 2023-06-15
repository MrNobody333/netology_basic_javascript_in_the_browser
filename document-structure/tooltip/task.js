const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(el => {
  el.addEventListener('click', e => {
    const tooltip = document.createElement('div');
    tooltip.textContent = el.getAttribute('title');
    tooltip.classList.add('tooltip', 'tooltip_active');
    
    document.querySelectorAll('.tooltip').forEach(el => {
      el.remove();
    });
    
    document.body.appendChild(tooltip);

    let coords = el.getBoundingClientRect();
    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = coords.bottom + 'px';

    e.preventDefault();
  });
});