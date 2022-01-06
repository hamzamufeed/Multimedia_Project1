import {Injectable} from "@angular/core";

@Injectable()
export class HomeVideosService {
  videos: string[] = [
    'No Time To Die',
    'Horizon Forbidden West',
    'La Casa De Papel',
    'Army Of Thieves',
    'Assassins Creed Valhalla',
    'BATTLEFIELD 2042'
  ];

  links : string[] = [
    'NoTimeToDie/my_video_manifest.mpd',
    'Horizon/my_video_manifest.mpd',
    'La Casa De Papel/my_video_manifest.mpd',
    'ArmyOfThieves/my_video_manifest.mpd',
    'AssassinsCreedValhalla/my_video_manifest.mpd',
    'BATTLEFIELD2042/my_video_manifest.mpd'
  ];

  images : string[] = [
    'https://cdn.europosters.eu/image/750/james-bond-no-time-to-die-azure-teaser-i84058.jpg',
    'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ToWd80GTK5OTneUk12K1HHkF.jpg',
    'https://upload.wikimedia.org/wikipedia/ar/thumb/b/b7/%D9%85%D9%84%D8%B5%D9%82_%D8%A8%D9%8A%D8%AA_%D8%A7%D9%84%D9%85%D8%A7%D9%84.jpg/235px-%D9%85%D9%84%D8%B5%D9%82_%D8%A8%D9%8A%D8%AA_%D8%A7%D9%84%D9%85%D8%A7%D9%84.jpg',
    'https://i.egycdn.com/pic/WmFwZndlY21tbUV2dHRjbWJtdkVjbW1tanZjbWJ2Y3ZjbW1tdg.jpg',
    'https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png',
    'https://s3.gaming-cdn.com/images/products/9896/orig/battlefield-2042-xbox-one-xbox-one-game-microsoft-store-cover.jpg'
  ];
}
