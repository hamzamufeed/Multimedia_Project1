import {Injectable} from "@angular/core";

@Injectable()
export class HomeVideosService {
  videos: string[] = [
    'No Time To Die',
    'No Time To Die (Part 2)',
    'Horizon Forbidden West',
    'La Casa De Papel',
    'Army Of Thieves',
    'Assassins Creed Valhalla',
    'BATTLEFIELD 2042'
  ];

  links : string[] = [
    'NoTimeToDie/my_video_manifest.mpd',
    'No Time To Die/my_video_manifest.mpd',
    'Horizon/my_video_manifest.mpd',
    'La Casa De Papel/my_video_manifest.mpd',
    'ArmyOfThieves/my_video_manifest.mpd',
    'AssassinsCreedValhalla/my_video_manifest.mpd',
    'BATTLEFIELD2042/my_video_manifest.mpd'
  ];
}
