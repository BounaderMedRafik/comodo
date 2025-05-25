import {
  ClipboardList,
  Code2,
  Globe,
  PenTool,
  Settings2,
  Wrench,
  Gamepad2,
} from "lucide-react";
import { SetupCategory } from "./types";

const iconsize = 14;

export const setupCategories: SetupCategory[] = [
  {
    id: "essentials",
    name: "Essentials",
    icon: <Wrench size={iconsize} />,
    options: [
      {
        id: "firefox",
        label: "Firefox",
        defaultSelected: true,
        command: "org.mozilla.firefox",
      },
      { id: "chromium", label: "Chromium", command: "org.chromium.Chromium" },
      { id: "vlc", label: "VLC Media Player", command: "org.videolan.VLC" },
      { id: "spotify", label: "Spotify", command: "com.spotify.Client" },
      { id: "brave", label: "Brave Browser", command: "com.brave.Browser" },
      {
        id: "zenbrowser",
        label: "Zen Browser",
        command: "app.zen_browser.zen",
      },
      {
        id: "thunderbird",
        label: "Thunderbird Mail",
        command: "org.mozilla.Thunderbird",
      },
    ],
  },
  {
    id: "development",
    name: "Development Tools",
    icon: <Code2 size={iconsize} />,
    options: [
      {
        id: "vscode",
        label: "Visual Studio Code",
        defaultSelected: true,
        command: "com.visualstudio.code",
      },
      { id: "postman", label: "Postman", command: "com.getpostman.Postman" },
      { id: "insomnia", label: "Insomnia", command: "rest.insomnia.Insomnia" },
      { id: "zed", label: "Zed Editor", command: "dev.zed.Zed" },
      {
        id: "github_desktop",
        label: "GitHub Desktop",
        command: "io.github.shiftey.Desktop",
      },
      {
        id: "mongodb_compass",
        label: "MongoDB Compass",
        command: "com.mongodb.Compass",
      },
    ],
  },
  {
    id: "design",
    name: "Design Tools",
    icon: <PenTool size={iconsize} />,
    options: [
      { id: "gimp", label: "GIMP", command: "org.gimp.GIMP" },
      { id: "inkscape", label: "Inkscape", command: "org.inkscape.Inkscape" },
      { id: "blender", label: "Blender", command: "org.blender.Blender" },
      { id: "krita", label: "Krita", command: "org.kde.krita" },
      {
        id: "libresprite",
        label: "LibreSprite",
        command: "com.github.libresprite.LibreSprite",
      },
    ],
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: <ClipboardList size={iconsize} />,
    options: [
      {
        id: "libreoffice",
        label: "LibreOffice",
        command: "org.libreoffice.LibreOffice",
      },
      { id: "obsidian", label: "Obsidian", command: "md.obsidian.Obsidian" },
      {
        id: "onlyoffice",
        label: "OnlyOffice",
        command: "org.onlyoffice.desktopeditors",
      },
      {
        id: "cohesion",
        label: "Cohesion (Notion Client)",
        command: "io.github.brunofin.Cohesion",
      },
    ],
  },
  {
    id: "communication",
    name: "Communication",
    icon: <Globe size={iconsize} />,
    options: [
      {
        id: "telegram",
        label: "Telegram Desktop",
        command: "org.telegram.desktop",
      },
      { id: "discord", label: "Discord", command: "com.discordapp.Discord" },
      { id: "signal", label: "Signal", command: "org.signal.Signal" },
      { id: "zoom", label: "Zoom", command: "us.zoom.Zoom" },
      { id: "slack", label: "Slack", command: "com.slack.Slack" },
      { id: "skype", label: "Skype", command: "com.skype.Client" },
      { id: "anydesk", label: "AnyDesk", command: "com.anydesk.Anydesk" },
    ],
  },
  {
    id: "media",
    name: "Media & Multimedia",
    icon: <PenTool size={iconsize} />,
    options: [
      {
        id: "audacity",
        label: "Audacity",
        command: "org.audacityteam.Audacity",
      },
      {
        id: "obs_studio",
        label: "OBS Studio",
        command: "com.obsproject.Studio",
      },
      { id: "cheese", label: "Cheese (Webcam)", command: "org.gnome.Cheese" },
      { id: "handbrake", label: "HandBrake", command: "fr.handbrake.ghb" },
    ],
  },
  {
    id: "gaming",
    name: "Gaming & Emulation",
    icon: <Gamepad2 size={iconsize} />,
    options: [
      { id: "steam", label: "Steam", command: "com.valvesoftware.Steam" },
      { id: "lutris", label: "Lutris", command: "net.lutris.Lutris" },
      { id: "osu", label: "osu!", command: "sh.ppy.osu" },
      { id: "ppsspp", label: "PPSSPP", command: "org.ppsspp.PPSSPP" },
      { id: "pcsx2", label: "PCSX2", command: "net.pcsx2.PCSX2" },
      {
        id: "bottles",
        label: "Bottles (Wine Manager)",
        command: "com.usebottles.bottles",
      },
      { id: "itch", label: "itch.io Client", command: "io.itch.itch" },
      { id: "unityhub", label: "Unity Hub", command: "com.unity.UnityHub" },
      {
        id: "sober",
        label: "Sober (Productivity Timer)",
        command: "org.vinegarhq.Sober",
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities & Tools",
    icon: <Settings2 size={iconsize} />,
    options: [
      { id: "proton_pass", label: "Proton Pass", command: "me.proton.Pass" },
      {
        id: "yt_downloader",
        label: "YtDownloader",
        command: "io.github.aandrew_me.ytdn",
      },
      {
        id: "upscaler",
        label: "Upscaler",
        command: "io.gitlab.theevilskeleton.Upscaler",
      },
      {
        id: "motrix",
        label: "Motrix (Download Manager)",
        command: "net.agalwood.Motrix",
      },
      {
        id: "flatsweep",
        label: "Flatsweep (Flatpak Cleaner)",
        command: "io.github.giantpinkrobots.flatsweep",
      },
      {
        id: "web_apps",
        label: "Web Apps (Tangram)",
        command: "re.sonny.Tangram",
      },
      {
        id: "notesnook",
        label: "Notesnook",
        command: "com.notesnook.Notesnook",
      },
    ],
  },
];
