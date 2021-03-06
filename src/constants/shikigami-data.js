import CLASSES from "./classes";
import ROLES from "./roles";
import QUALITIES from "./qualities";

const SHIKIGAMI_DATA = [
  {
    name: "Shuten Doji",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b657f9d2a49f5068029j0O6eKtW",
    role: ROLES.SAMURAI,
    class: CLASSES.DEVIL,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Ebisu",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b6596dee4d35a2087c83i1cop03",
    role: ROLES.SUPPORT,
    class: CLASSES.GOD,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Aoandon",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b6696dee4050a5e9b54vYtAGJA7",
    role: ROLES.WITCHER,
    class: CLASSES.SPIRIT,
    quality: QUALITIES.ORANGE,
  },
  {
    name: "Kuro Mujou",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b667f9d2a41f3ff4840qSchKhj4",
    role: ROLES.SAMURAI,
    class: CLASSES.UNDERWORLD,
    quality: QUALITIES.ORANGE,
  },
  {
    name: "Ootengu",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b656f0494f5ddd56081pdJ8pCsz",
    role: ROLES.MAGE,
    class: CLASSES.DEVIL,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Momiji",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b666f0494f5038d3ebdYDHst72M",
    role: ROLES.MAGE,
    class: CLASSES.FOREST,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Itsumade",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b655e6027b0ebca3be9r55kAGhv",
    role: ROLES.NINJA,
    class: CLASSES.HARPY,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Higanbana",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5b3051615e6027b4f7c4b33ddxcvtWoO",
    role: ROLES.MAGE,
    class: CLASSES.UNDERWORLD,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Youko",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b65143cfa2c60a4e9b3MrIQU1JD",
    role: ROLES.MASKMAN,
    class: CLASSES.BEAST,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Mouba",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b6596dee45bb00b4a9411iiv1bN",
    role: ROLES.TANK,
    class: CLASSES.UNDERWORLD,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Hannya",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b655e60278333047af5qxZsBbjv",
    role: ROLES.SAMURAI,
    class: CLASSES.EVIL,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Hakuro",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b656f0494db33cfd4b1YxWtYWxk",
    role: ROLES.MASKMAN,
    class: CLASSES.BEAST,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Shiro Mujou",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b6696dee4529d019ab4evwsK5r7",
    role: ROLES.WITCHER,
    class: CLASSES.UNDERWORLD,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Tamamonomae",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5c414efa143cfa475cbca107FR99464G02",
    role: ROLES.MAGE,
    class: CLASSES.DEVIL,
    quality: QUALITIES.ORANGE,
  },
  {
    name: "Hououga",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b66143cfa455c082631p4QEeNZf",
    role: ROLES.WITCHER,
    class: CLASSES.NATURE,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Kaguya",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b65a7f25235fa45ae7dqsWW03iT",
    role: ROLES.SUPPORT,
    class: CLASSES.GOD,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Miketsu",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5bc074278b74272081fc24afXh7O3FWx",
    role: ROLES.MASKMAN,
    class: CLASSES.GOD,
    quality: QUALITIES.ORANGE,
  },
  {
    name: "Inugami",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b657f9d2a41749e90a75kIZyjdq",
    role: ROLES.SAMURAI,
    class: CLASSES.WARRIOR,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Jikikaeru",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b65a7f2524c8f6a4b65DqoSx6um",
    role: ROLES.MASKMAN,
    class: CLASSES.SPIRIT,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Kyonshi Imoto",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b66a7f25207a156aff3diw1cHSG",
    role: ROLES.NINJA,
    class: CLASSES.ZOMBIE,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Jorogumo",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b65143cfa455c082630QNxJiNJH",
    role: ROLES.WITCHER,
    class: CLASSES.EVIL,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Shishio",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5b238195a7f2520037ef0fb5JgjZZW4B",
    role: ROLES.SAMURAI,
    class: CLASSES.FOREST,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Yumekui",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5ba4deec7f9d2a0b288d72c2GuFEhK15",
    role: ROLES.TANK,
    class: CLASSES.BEAST,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Kamaitachi",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5bdc0703143cfaaf3cee48a7zUxisl6w",
    role: ROLES.SAMURAI,
    class: CLASSES.WARRIOR,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Yuki Doij",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5bf76c9a7f9d2a137c053ba7ftMi4Bem",
    role: ROLES.SAMURAI,
    class: CLASSES.NATURE,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Ibaraki Doji",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b657f9d2a4927904d22e5gLcsX7",
    role: ROLES.SAMURAI,
    class: CLASSES.DEVIL,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Karasu Tengu",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b658b7427d0444c3a00MQILxdPR",
    role: ROLES.TANK,
    class: CLASSES.WARRIOR,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Enenra",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0bd56f0494f7844a8138kYwYMK8Q",
    role: ROLES.WITCHER,
    class: CLASSES.NATURE,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Yoto Hime",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b656f0494ff34663733dEASvQNE",
    role: ROLES.NINJA,
    class: CLASSES.SPIRIT,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Tanuki",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b657f9d2a32e82c930faAlYLhG6",
    role: ROLES.TANK,
    class: CLASSES.BEAST,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Hotarugusa",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5b4a48388b7427453e01e8f05pqTAmQ0",
    role: ROLES.SUPPORT,
    class: CLASSES.FOREST,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Kingyo",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b658b7427bf46de7e69iiKrKgXZ",
    role: ROLES.MAGE,
    class: CLASSES.NATURE,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Yuki Onna",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b657f9d2a49f506802aZ5wVI2v4",
    role: ROLES.MAGE,
    class: CLASSES.NATURE,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Kyonshi Ani",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5b88bb27143cfa6c5649298cMkB9slei",
    role: ROLES.TANK,
    class: CLASSES.ZOMBIE,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Yasha",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b658b7427d0444c39ff9sCVLjdW",
    role: ROLES.NINJA,
    class: CLASSES.EVIL,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Kuro Doji",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b656f0494f5038d3ebcC0WZysjx",
    role: ROLES.TANK,
    class: CLASSES.UNDERWORLD,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Ryomenbotoke",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0bd55e6027c9ff4adea39fJTYDMT",
    role: ROLES.SAMURAI,
    class: CLASSES.GOD,
    quality: QUALITIES.GREEN,
  },
  {
    name: "Heiyo",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b65a7f252438891bb27pxSGu7LP",
    role: ROLES.TANK,
    class: CLASSES.WARRIOR,
    quality: QUALITIES.ORANGE,
  },
  {
    name: "Hone Onna",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b65143cfaffdb215319KMYTPCD9",
    role: ROLES.NINJA,
    class: CLASSES.EVIL,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Ichimokuren",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5b2381bd7f9d2ab73536cea6bp3CiFGT",
    role: ROLES.SUPPORT,
    class: CLASSES.NATURE,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Ubume",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b656f0494db33cfd4b2HcreNV6g",
    role: ROLES.NINJA,
    class: CLASSES.HARPY,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Susabi",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b657f9d2a2044fa5c3bW851s6J7",
    role: ROLES.MAGE,
    class: CLASSES.GOD,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Menreiki",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5b767b215e6027ea84485312YlVS1qzK",
    role: ROLES.MAGE,
    class: CLASSES.SPIRIT,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Vampira",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b65143cfa2c60a4e9b4iewGGihi",
    role: ROLES.WITCHER,
    class: CLASSES.EVIL,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Momo",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5c9451df2786fd335d8d0033mmAxk9iL02",
    role: ROLES.SUPPORT,
    class: CLASSES.FOREST,
    quality: QUALITIES.BROWN,
  },
  {
    name: "Mannendake",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0bd55e6027c9ff4adea2rP36d89I",
    role: ROLES.NINJA,
    class: CLASSES.FOREST,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Komatsu",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5b3a011b8b74277957221ec4mrMD62uD",
    role: ROLES.MASKMAN,
    class: CLASSES.FOREST,
    quality: QUALITIES.BLUE,
  },
  {
    name: "Umibozu",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b658b74279f8165c22aNjaMG8yU",
    role: ROLES.SUPPORT,
    class: CLASSES.NATURE,
    quality: QUALITIES.ORANGE,
  },
  {
    name: "Hangan",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b668b7427c31ab2f7a8qxiiiUzK",
    role: ROLES.MAGE,
    class: CLASSES.UNDERWORLD,
    quality: QUALITIES.PURPLE,
  },
  {
    name: "Futakuchi",
    avatar:
      "https://g.fp.ps.netease.com/doraemon/file/5aec0b665e6027afacc82f51HEse6Uoh",
    role: ROLES.MASKMAN,
    class: CLASSES.EVIL,
    quality: QUALITIES.GREEN,
  },
];

export default SHIKIGAMI_DATA;
