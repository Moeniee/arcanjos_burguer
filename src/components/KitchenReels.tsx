import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { KITCHEN_REELS } from '../data/menu';

export function KitchenReels() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleTogglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (activeVideoId === id && !video.paused) {
      video.pause();
      setActiveVideoId(null);
    } else {
      // Pause any previously playing video
      if (activeVideoId && videoRefs.current[activeVideoId]) {
        videoRefs.current[activeVideoId]?.pause();
      }
      video.play().catch(() => {});
      setActiveVideoId(id);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    Object.values(videoRefs.current).forEach((video) => {
      if (video) video.muted = !isMuted;
    });
  };

  return (
    <section id="bastidores" className="py-16 md:py-24 bg-[#1E1214] text-white overflow-hidden relative">
      {/* Background warm glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D72D38]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F46036]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D72D38]/30 border border-[#D72D38]/50 text-[#EDE0D4] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F46036]" />
              <span>Direto da Chapa</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Bastidores da Cozinha Arcanjo's
            </h2>
            <p className="text-sm sm:text-base text-[#EDE0D4]/80 max-w-xl">
              Assista à mágica acontecendo na vida real: carnes selando na chapa fervente, fatias de queijo derretendo e batatas estalando de tão crocantes!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-medium transition-colors"
              aria-label={isMuted ? 'Ativar som dos vídeos' : 'Silenciar vídeos'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-[#F46036]" /> : <Volume2 className="w-4 h-4 text-white" />}
              <span>{isMuted ? 'Som Desativado' : 'Som Ativo'}</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KITCHEN_REELS.map((reel) => {
            const isPlaying = activeVideoId === reel.id;

            return (
              <div
                key={reel.id}
                onClick={() => handleTogglePlay(reel.id)}
                className="group relative aspect-9/16 rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl cursor-pointer hover:border-[#D72D38] transition-all duration-300"
              >
                {/* HTML5 Video */}
                <video
                  ref={(el) => {
                    videoRefs.current[reel.id] = el;
                  }}
                  src={reel.videoSrc}
                  poster={reel.poster}
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

                {/* Central Play/Pause Pulse Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isPlaying
                        ? 'bg-black/40 text-white/80 opacity-0 group-hover:opacity-100 scale-90'
                        : 'bg-[#D72D38] text-white opacity-95 group-hover:scale-110 shadow-lg shadow-[#D72D38]/50'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                  </div>
                </div>

                {/* Video Info Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5 pointer-events-none">
                  <div className="flex items-center justify-between text-xs text-[#EDE0D4]/70">
                    <span className="font-medium">Arcanjo Reel</span>
                    <span className="tabular-nums">{reel.duration}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white leading-snug">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-[#EDE0D4]/80 line-clamp-2">
                    {reel.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
