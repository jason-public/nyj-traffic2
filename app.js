// Namyangju Traffic Webtoon Application

// Application state (using variables instead of localStorage due to sandbox restrictions)
let applicationState = {
  likedEpisodes: new Set(),
  episodeLikes: {
    1: 1234,
    2: 2156,
    3: 1876,
    4: 987,
    5: 1543,
    6: 2341
  },
  currentEpisode: null
};

// Episode data
const episodeData = {
  1: {
    title: "별내선 개통, 잠실까지 20분!",
    description: "별내선(8호선 연장) 개통으로 별내-잠실 20분대 연결되는 이야기",
    status: "completed",
    cuts: [
      {
        visual: "🏠",
        bgColor: "var(--color-bg-1)",
        text: "매일 아침 7시... 통통이의 하루가 시작됩니다",
        speech: "아... 또 1시간 걸리는 출근길이야 😩"
      },
      {
        visual: "📺",
        bgColor: "var(--color-bg-2)",
        text: "뉴스에서 반가운 소식이 들려왔어요!",
        speech: "별내선 8호선 연장선이 드디어 개통됐다고? 🎉"
      },
      {
        visual: "🚇",
        bgColor: "var(--color-bg-3)",
        text: "새로 개통한 다산역에서 지하철을 탑승합니다",
        speech: "와! 정말 깨끗하고 새로운 역이네요! ✨"
      },
      {
        visual: "⏰",
        bgColor: "var(--color-bg-4)",
        text: "20분 후... 벌써 잠실에 도착!",
        speech: "정말 20분만에? 이제 출퇴근이 이렇게 편해졌다니! 😊"
      }
    ],
    policy: {
      title: "별내선(8호선 연장) 개통",
      description: "2024년 8월 개통으로 별내-잠실 20분대 연결을 실현했습니다. 하루 평균 3만여 명이 이용하며, 시민들의 출퇴근 시간을 대폭 단축시켰습니다.",
      benefits: ["출퇴근 시간 1시간 → 20분 단축", "하루 3만여 명 이용", "교통비 절약 효과", "지역 발전 기여"]
    }
  },
  2: {
    title: "GTX 5개 노선, 남양주가 중심!",
    description: "전국 유일 5개 GTX 노선 확보로 2030년 서울까지 20분대 접근",
    status: "progress",
    cuts: [
      {
        visual: "👨‍👩‍👧‍👦",
        bgColor: "var(--color-bg-2)",
        text: "남양주 시민 가족이 GTX 노선도를 보고 있어요",
        speech: "와! 우리 남양주에 GTX가 5개나 지나간다고? 😲"
      },
      {
        visual: "🚄",
        bgColor: "var(--color-bg-1)",
        text: "GTX-B, D, E, F, G 노선! 전국에서 유일해요",
        speech: "다른 지역은 1-2개인데 우리는 5개라니! 대단해! 🚀"
      },
      {
        visual: "🏙️",
        bgColor: "var(--color-bg-5)",
        text: "2030년 미래의 모습을 상상해봐요",
        speech: "서울까지 20분이면... 정말 꿈같은 일이 현실이 되는구나! ✨"
      },
      {
        visual: "📈",
        bgColor: "var(--color-bg-3)",
        text: "남양주의 경쟁력이 크게 높아졌어요!",
        speech: "이제 남양주가 진짜 수도권 중심 도시가 되는 거네! 🎯"
      }
    ],
    policy: {
      title: "GTX 5개 노선 확보",
      description: "GTX-B, D, E, F, G 노선으로 전국 유일 5개 노선을 확보했습니다. 2030년에는 서울까지 20분대 접근이 가능해집니다.",
      benefits: ["전국 유일 5개 GTX 노선", "2030년 서울 20분대 접근", "수도권 동북부 교통 허브", "지역 경쟁력 대폭 향상"]
    }
  },
  3: {
    title: "친환경 전기버스의 등장",
    description: "2층 전기버스 도입으로 매연 감소와 승차감 향상",
    status: "active",
    cuts: [
      {
        visual: "😷",
        bgColor: "var(--color-bg-4)",
        text: "기존 버스에서 나오는 매연 때문에 힘들었어요",
        speech: "매일 이 매연을 마시며 다녀야 하나... 😔"
      },
      {
        visual: "🚌",
        bgColor: "var(--color-bg-3)",
        text: "짠! 친환경 2층 전기버스가 등장!",
        speech: "와! 2층 버스다! 그리고 소음도 전혀 없어! 🎉"
      },
      {
        visual: "😊",
        bgColor: "var(--color-bg-1)",
        text: "깨끗하고 조용한 승차감을 경험해요",
        speech: "정말 조용하고 깨끗해! 공기도 맑고! 🌿"
      },
      {
        visual: "👥",
        bgColor: "var(--color-bg-6)",
        text: "70석 대용량으로 더 많은 사람들이 편리하게!",
        speech: "이제 자리 걱정 없이 편안하게 이용할 수 있겠어! 👍"
      }
    ],
    policy: {
      title: "친환경 전기버스 도입",
      description: "2층 전기버스 70석으로 기존 대비 60% 증가된 수용 인원을 제공합니다. 매연 감소와 승차감 향상으로 시민 만족도가 크게 개선되었습니다.",
      benefits: ["매연 제로 친환경", "70석 대용량 (60% 증가)", "조용한 승차감", "대기질 개선"]
    }
  },
  4: {
    title: "스마트 교통시스템",
    description: "AI, IoT 활용한 실시간 교통관리 시스템",
    status: "planned",
    cuts: [
      {
        visual: "📱",
        bgColor: "var(--color-bg-5)",
        text: "시민이 스마트폰으로 실시간 교통정보를 확인해요",
        speech: "어? 버스가 정확히 3분 후에 온다고 나와있네! 📱"
      },
      {
        visual: "🖥️",
        bgColor: "var(--color-bg-1)",
        text: "스마트시티 통합센터에서 AI가 교통을 관리합니다",
        speech: "AI가 실시간으로 교통 상황을 분석하고 있어요! 🤖"
      },
      {
        visual: "🚦",
        bgColor: "var(--color-bg-2)",
        text: "IoT 센서가 교통량을 실시간으로 감지해요",
        speech: "신호등도 스마트하게 교통량에 맞춰 조절되고 있네! 🚦"
      },
      {
        visual: "⚡",
        bgColor: "var(--color-bg-3)",
        text: "2029년, 완전한 스마트 교통 도시 완성!",
        speech: "와! 이제 정말 미래 도시에 사는 기분이야! 🚀"
      }
    ],
    policy: {
      title: "스마트시티 통합센터",
      description: "왕숙신도시 내 AI/IoT 기반 교통관리 시스템을 2029년 구축 예정입니다. 실시간 교통정보와 지능형 관제 서비스를 제공할 예정입니다.",
      benefits: ["AI 기반 실시간 교통관리", "IoT 센서 활용 정보 수집", "지능형 신호 제어", "시민 맞춤형 교통 서비스"]
    }
  },
  5: {
    title: "도로 인프라 대혁신",
    description: "수도권제2순환고속도로 개통과 교통체계 개선",
    status: "completed",
    cuts: [
      {
        visual: "🚗",
        bgColor: "var(--color-bg-6)",
        text: "기존에는 우회해서 가야 했던 긴 길...",
        speech: "북부에서 남부로 가려면 정말 돌아서 가야 했는데... 😤"
      },
      {
        visual: "🛣️",
        bgColor: "var(--color-bg-1)",
        text: "수도권제2순환고속도로가 개통됐어요!",
        speech: "와! 포천-화도-조안이 바로 연결됐네! 🎉"
      },
      {
        visual: "⏱️",
        bgColor: "var(--color-bg-3)",
        text: "이동 시간이 절반으로 단축됐어요",
        speech: "1시간 걸리던 길이 30분으로! 시간 절약 효과 대단해! ⚡"
      },
      {
        visual: "🌐",
        bgColor: "var(--color-bg-2)",
        text: "남양주 전체가 하나로 연결된 교통망!",
        speech: "이제 남양주 어디든 빠르게 갈 수 있겠어! 🚀"
      }
    ],
    policy: {
      title: "수도권제2순환고속도로",
      description: "포천-화도-조안 구간 개통으로 북부-남부 직결 교통망을 구축했습니다. 교통체계개선사업(TSM)과 함께 종합적인 도로 인프라 혁신을 이뤘습니다.",
      benefits: ["북부-남부 직결 교통망", "이동시간 50% 단축", "교통 체증 해소", "지역간 접근성 향상"]
    }
  },
  6: {
    title: "100만 메가시티의 꿈",
    description: "왕숙신도시와 교통망 연계로 자족기능 갖춘 미래도시",
    status: "progress",
    cuts: [
      {
        visual: "🏗️",
        bgColor: "var(--color-bg-7)",
        text: "왕숙신도시 건설이 한창 진행 중이에요",
        speech: "와! 정말 큰 신도시가 생기고 있네! 🏗️"
      },
      {
        visual: "🚇",
        bgColor: "var(--color-bg-1)",
        text: "모든 교통망이 왕숙신도시와 연결돼요",
        speech: "GTX, 지하철, 버스... 모든 교통이 한 곳에! 🚊"
      },
      {
        visual: "🏢",
        bgColor: "var(--color-bg-3)",
        text: "일하고, 살고, 즐기는 자족기능 완비!",
        speech: "일터와 집이 가까우니까 삶의 질이 정말 좋아졌어! 🏢"
      },
      {
        visual: "🎯",
        bgColor: "var(--color-bg-5)",
        text: "100만 메가시티 남양주의 꿈이 현실로!",
        speech: "이제 남양주가 진짜 대한민국 대표 도시가 됐어! 🌟"
      }
    ],
    policy: {
      title: "100만 메가시티 도약",
      description: "왕숙신도시와 교통망 연계로 자족기능을 갖춘 미래 도시로 발전하고 있습니다. '상상 그 이상의 연결'을 통해 100만 메가시티로 도약하고 있습니다.",
      benefits: ["자족기능 갖춘 미래도시", "일자리-주거 근접성", "교통 허브 도시", "삶의 질 향상"]
    }
  }
};

// DOM Elements
const episodeCards = document.querySelectorAll('.episode-card');
const webtoonModal = document.getElementById('webtoonModal');
const modalTitle = document.getElementById('modalTitle');
const webtoonViewer = document.getElementById('webtoonViewer');
const modalClose = document.querySelector('.modal-close');
const likeBtn = document.querySelector('.like-btn');
const shareBtn = document.querySelector('.share-btn');
const policyInfo = document.getElementById('policyInfo');
const heroCta = document.querySelector('.hero-cta');

// Initialize application
function initApp() {
  setupEventListeners();
  updateLikeCounts();
}

// Event Listeners
function setupEventListeners() {
  // Episode card clicks
  episodeCards.forEach(card => {
    card.addEventListener('click', () => {
      const episodeId = parseInt(card.getAttribute('data-episode'));
      openWebtoon(episodeId);
    });
  });

  // Modal close
  modalClose.addEventListener('click', closeModal);
  webtoonModal.addEventListener('click', (e) => {
    if (e.target === webtoonModal) {
      closeModal();
    }
  });

  // Hero CTA
  heroCta.addEventListener('click', () => {
    document.getElementById('episodes').scrollIntoView({ behavior: 'smooth' });
  });

  // Like button
  likeBtn.addEventListener('click', handleLike);

  // Share button
  shareBtn.addEventListener('click', handleShare);

  // Navigation
  setupNavigation();

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && webtoonModal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Navigation setup
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      link.classList.add('active');
      
      // Scroll to section
      const target = link.getAttribute('href');
      if (target && target !== '#') {
        const section = document.querySelector(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Open webtoon modal
function openWebtoon(episodeId) {
  const episode = episodeData[episodeId];
  if (!episode) return;

  applicationState.currentEpisode = episodeId;
  
  // Set modal title
  modalTitle.textContent = episode.title;
  
  // Create webtoon cuts
  createWebtoonCuts(episode.cuts);
  
  // Set policy information
  setPolicyInfo(episode.policy);
  
  // Update like button state
  updateLikeButton(episodeId);
  
  // Show modal
  webtoonModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Create webtoon cuts
function createWebtoonCuts(cuts) {
  webtoonViewer.innerHTML = '';
  
  cuts.forEach((cut, index) => {
    const cutElement = document.createElement('div');
    cutElement.className = 'webtoon-cut';
    
    cutElement.innerHTML = `
      <div class="cut-visual" style="background: ${cut.bgColor}">
        ${cut.visual}
      </div>
      <div class="speech-bubble">
        ${cut.speech}
      </div>
      <p style="margin-top: 16px; color: var(--color-text-secondary); text-align: center; font-style: italic;">
        ${cut.text}
      </p>
    `;
    
    webtoonViewer.appendChild(cutElement);
  });
}

// Set policy information
function setPolicyInfo(policy) {
  policyInfo.innerHTML = `
    <h5 style="margin-bottom: 12px; color: var(--color-text);">${policy.title}</h5>
    <p style="margin-bottom: 16px; line-height: 1.6;">${policy.description}</p>
    <div style="margin-top: 16px;">
      <h6 style="margin-bottom: 8px; color: var(--color-text);">주요 혜택:</h6>
      <ul style="margin: 0; padding-left: 20px; color: var(--color-text-secondary);">
        ${policy.benefits.map(benefit => `<li style="margin-bottom: 4px;">${benefit}</li>`).join('')}
      </ul>
    </div>
  `;
}

// Update like button state
function updateLikeButton(episodeId) {
  const isLiked = applicationState.likedEpisodes.has(episodeId);
  const likeCount = applicationState.episodeLikes[episodeId] || 0;
  
  likeBtn.classList.toggle('liked', isLiked);
  likeBtn.querySelector('.like-count').textContent = likeCount.toLocaleString();
}

// Handle like action
function handleLike() {
  if (!applicationState.currentEpisode) return;
  
  const episodeId = applicationState.currentEpisode;
  const isLiked = applicationState.likedEpisodes.has(episodeId);
  
  if (isLiked) {
    applicationState.likedEpisodes.delete(episodeId);
    applicationState.episodeLikes[episodeId]--;
  } else {
    applicationState.likedEpisodes.add(episodeId);
    applicationState.episodeLikes[episodeId]++;
  }
  
  updateLikeButton(episodeId);
  updateLikeCounts();
  
  // Add animation effect
  likeBtn.style.transform = 'scale(1.1)';
  setTimeout(() => {
    likeBtn.style.transform = 'scale(1)';
  }, 150);
}

// Handle share action
function handleShare() {
  if (!applicationState.currentEpisode) return;
  
  const episode = episodeData[applicationState.currentEpisode];
  const shareText = `${episode.title} - 남양주 교통 웹툰`;
  
  if (navigator.share) {
    navigator.share({
      title: shareText,
      text: episode.description,
      url: window.location.href
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
  
  // Add animation effect
  shareBtn.style.transform = 'scale(1.05)';
  setTimeout(() => {
    shareBtn.style.transform = 'scale(1)';
  }, 150);
}

// Update like counts in episode cards
function updateLikeCounts() {
  episodeCards.forEach(card => {
    const episodeId = parseInt(card.getAttribute('data-episode'));
    const likeElement = card.querySelector('.episode-likes');
    if (likeElement) {
      const count = applicationState.episodeLikes[episodeId] || 0;
      likeElement.textContent = `❤️ ${count.toLocaleString()}`;
    }
  });
}

// Close modal
function closeModal() {
  webtoonModal.classList.remove('active');
  document.body.style.overflow = '';
  applicationState.currentEpisode = null;
}

// Smooth scrolling for anchor links
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add loading animation for episode cards
function addLoadingAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  });
  
  episodeCards.forEach(card => {
    observer.observe(card);
  });
}

// Add scroll-triggered animations
function addScrollAnimations() {
  const animatedElements = document.querySelectorAll('.policy-card, .benefit-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        entry.target.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, Math.random() * 200);
        
        observer.unobserve(entry.target);
      }
    });
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Add hover effects for episode cards
function addHoverEffects() {
  episodeCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  smoothScroll();
  addLoadingAnimations();
  addScrollAnimations();
  addHoverEffects();
  
  // Add some welcome interaction
  setTimeout(() => {
    console.log('🚊 남양주 교통 웹툰에 오신 것을 환영합니다!');
    console.log('📱 에피소드를 클릭해서 웹툰을 즐겨보세요!');
  }, 1000);
});

// Add window resize handler for responsive behavior
window.addEventListener('resize', () => {
  // Close modal on mobile rotation
  if (window.innerWidth < 768 && webtoonModal.classList.contains('active')) {
    closeModal();
  }
});

// Export functions for potential testing (in non-sandbox environment)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    episodeData,
    applicationState,
    openWebtoon,
    handleLike,
    handleShare
  };
}