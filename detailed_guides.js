const guides = {
  "pet": {
    ko: { text: "PET는 뚜껑과 라벨을 제거하고 압착하여 배출하세요.", path: "플라스틱 → 선별장 → 압축 → 재생원료 → 섬유·의류", image: "https://i.imgur.com/UeFk4KU.png" },
    en: { text: "Remove the cap and label from PET bottles and crush before recycling.", path: "Plastic → Sorting center → Compression → Recycled material → Fiber or clothing", image: "https://i.imgur.com/UeFk4KU.png" }
  },
  "hdpe": {
    ko: { text: "HDPE는 내용물을 비우고 세척 후 배출하세요.", path: "플라스틱 → 세척 → 재생원료 → 플라스틱 용기", image: "https://i.imgur.com/NVzrH7O.png" },
    en: { text: "Empty and wash HDPE containers before recycling.", path: "Plastic → Washing → Recycled material → Plastic containers", image: "https://i.imgur.com/NVzrH7O.png" }
  },
  "pvc": {
    ko: { text: "PVC는 재활용이 어렵고 유해물질 포함 가능성이 있어 일반쓰레기로 배출하세요.", path: "일반쓰레기 → 소각 또는 매립", image: "https://i.imgur.com/Nw9tghl.png" },
    en: { text: "PVC is hard to recycle and may contain toxic materials. Dispose of it as general waste.", path: "General waste → Incineration or landfill", image: "https://i.imgur.com/Nw9tghl.png" }
  },
  "ldpe": {
    ko: { text: "LDPE는 주로 비닐류로 이물질 제거 후 깨끗한 것만 분리배출하세요.", path: "플라스틱 → 세척 → 재생원료 → 쓰레기봉투·필름", image: "https://i.imgur.com/YMHbTY2.png" },
    en: { text: "LDPE includes wraps and bags. Clean them before recycling.", path: "Plastic → Washing → Recycled material → Trash bags, film", image: "https://i.imgur.com/YMHbTY2.png" }
  },
  "pp": {
    ko: { text: "PP는 라벨 제거 후 깨끗이 헹구고 압착하여 배출하세요.", path: "플라스틱 → 선별 → 세척 → 재생원료 → 자동차 부품 등", image: "https://i.imgur.com/o4y8VUM.png" },
    en: { text: "Remove label from PP, rinse, and compress before disposal.", path: "Plastic → Sorting → Washing → Recycled material → Auto parts etc.", image: "https://i.imgur.com/o4y8VUM.png" }
  },
  "ps": {
    ko: { text: "PS는 스티로폼 등에 사용되며 깨끗한 경우만 분리배출 가능합니다.", path: "플라스틱 → 선별 → 재생원료 → 단열재·포장재", image: "https://i.imgur.com/XqE1c3I.png" },
    en: { text: "PS includes foam and is recyclable only when clean.", path: "Plastic → Sorting → Recycled material → Insulation or packaging", image: "https://i.imgur.com/XqE1c3I.png" }
  },
  "other": {
    ko: { text: "OTHER는 혼합재질로 재활용이 어렵고 일반쓰레기로 배출하세요.", path: "일반쓰레기 → 소각 또는 매립", image: "https://i.imgur.com/4JrCgVE.png" },
    en: { text: "OTHER refers to mixed plastics. Dispose of it as general waste.", path: "General waste → Incineration or landfill", image: "https://i.imgur.com/4JrCgVE.png" }
  },
  "종이팩": {
    ko: { text: "종이팩은 깨끗이 헹구고 압착하여 배출하세요.", path: "종이팩 → 별도 선별 → 재생펄프 → 화장지·제지", image: "https://i.imgur.com/MGmS7Gy.png" },
    en: { text: "Rinse and flatten paper packs before recycling.", path: "Paper pack → Sorting → Recycled pulp → Tissue or paper", image: "https://i.imgur.com/MGmS7Gy.png" }
  },
  "일반쓰레기": {
    ko: { text: "음식물, 오염된 비닐/용기류, 휴지 등은 일반쓰레기로 배출하세요.", path: "일반쓰레기 → 소각 또는 위생매립", image: "https://i.imgur.com/rIEpEVU.png" },
    en: { text: "Food waste, dirty containers or plastic, and tissue go to general waste.", path: "General waste → Incineration or sanitary landfill", image: "https://i.imgur.com/rIEpEVU.png" }
  },
};