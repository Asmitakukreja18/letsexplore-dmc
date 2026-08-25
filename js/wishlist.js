/**
 * ═══════════════════════════════════════════════════════════
 *  Wishlist.js — Shared localStorage Wishlist Helper
 *  Let's Explore DMC | Heart-button persistence across pages
 * ═══════════════════════════════════════════════════════════
 *
 * API:
 *   Wishlist.toggle(id, data)   — toggle save state
 *   Wishlist.isSaved(id)        — boolean
 *   Wishlist.getAll()           — array of saved items
 *   Wishlist.remove(id)         — remove one item
 *   Wishlist.clear()            — remove all
 *
 *  Heart buttons: add data-wish-id + data-wish-* attrs to any element,
 *  then call Wishlist.initHearts() to wire them up automatically.
 */

(function (global) {
  'use strict';

  const KEY = 'letsexplore_wishlist';

  /* ── Core storage helpers ─────────────────────────────── */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  }
  function save(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
    _dispatch();
  }
  function _dispatch() {
    document.dispatchEvent(new CustomEvent('wishlist:change', { detail: { list: load() } }));
    _updateNavBadge();
  }

  /* ── Nav badge counter ────────────────────────────────── */
  function _updateNavBadge() {
    const count = load().length;
    document.querySelectorAll('[data-wishlist-badge]').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
    /* Update wishlist icon heart fill in nav */
    document.querySelectorAll('.nav-icon-btn[href="wishlist.html"] svg path').forEach(p => {
      p.setAttribute('fill', count > 0 ? '#F4A261' : 'none');
    });
  }

  /* ── Public API ───────────────────────────────────────── */
  const Wishlist = {
    toggle(id, data) {
      const list = load();
      const idx = list.findIndex(i => i.id === id);
      if (idx >= 0) { list.splice(idx, 1); }
      else { list.push({ id, ...data, savedAt: Date.now() }); }
      save(list);
      return idx < 0; // true = now saved
    },
    isSaved(id) {
      return load().some(i => i.id === id);
    },
    getAll() { return load(); },
    remove(id) {
      const list = load().filter(i => i.id !== id);
      save(list);
    },
    clear() { save([]); },

    /* Wire up all [data-wish-id] heart buttons on the page */
    initHearts() {
      document.querySelectorAll('[data-wish-id]').forEach(btn => {
        const id = btn.dataset.wishId;
        _refreshHeart(btn, Wishlist.isSaved(id));

        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const data = {
            title:    btn.dataset.wishTitle    || '',
            subtitle: btn.dataset.wishSubtitle || '',
            price:    btn.dataset.wishPrice    || '',
            img:      btn.dataset.wishImg      || '',
            href:     btn.dataset.wishHref     || '#',
          };
          const saved = Wishlist.toggle(id, data);
          _refreshHeart(btn, saved);
          _heartPulse(btn);
        });
      });
    }
  };

  function _refreshHeart(btn, saved) {
    const svg = btn.querySelector('svg');
    if (!svg) return;
    const path = svg.querySelector('path');
    if (!path) return;
    if (saved) {
      path.setAttribute('fill', '#F4A261');
      path.setAttribute('stroke', '#F4A261');
      btn.setAttribute('title', 'Remove from Wishlist');
      btn.classList.add('wish-saved');
    } else {
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'currentColor');
      btn.setAttribute('title', 'Save to Wishlist');
      btn.classList.remove('wish-saved');
    }
  }

  function _heartPulse(btn) {
    btn.classList.add('wish-pulse');
    setTimeout(() => btn.classList.remove('wish-pulse'), 500);
  }

  /* CSS for heart animation — injected once */
  if (!document.getElementById('wish-style')) {
    const style = document.createElement('style');
    style.id = 'wish-style';
    style.textContent = `
      [data-wish-id] {
        cursor: pointer;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      [data-wish-id]:hover { transform: scale(1.15); }
      [data-wish-id].wish-pulse { animation: wishPulse 0.45s cubic-bezier(0.34, 1.56, 0.64, 1); }
      [data-wish-id].wish-saved svg path { filter: drop-shadow(0 0 6px rgba(244,162,97,0.5)); }
      @keyframes wishPulse {
        0%  { transform: scale(1);   }
        50% { transform: scale(1.4); }
        100%{ transform: scale(1);   }
      }
    `;
    document.head.appendChild(style);
  }

  /* Auto-init when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      Wishlist.initHearts();
      _updateNavBadge();
    });
  } else {
    Wishlist.initHearts();
    _updateNavBadge();
  }

  global.Wishlist = Wishlist;
})(window);
