import { Anime } from 'lib';

export default class StoryAnime extends Anime {
  constructor() {
    super();

    let lineHeight = 50;
    let label1_1 = this.createLabel(19, 19, "", "35px MarugameFont");
    label1_1.color = "black";
    let label1_2 = this.createLabel(21, 21, "", "35px MarugameFont");
    label1_2.color = "white";

    let label2_1 = this.createLabel(19, 19 + lineHeight, "", "35px MarugameFont");
    label2_1.color = "black";
    let label2_2 = this.createLabel(21, 21 + lineHeight, "", "35px MarugameFont");
    label2_2.color = "white";

    let label3_1 = this.createLabel(19, 19 + lineHeight*2, "", "35px MarugameFont");
    label3_1.color = "black";
    let label3_2 = this.createLabel(21, 21 + lineHeight*2, "", "35px MarugameFont");
    label3_2.color = "white";

    // let label2 = this.createLabel(20, 20+100, "きゃすけっとかいじょうへ", "45px MarugameFont");
    // let label3 = this.createLabel(20, 20+200, "むかっているようです。", "45px MarugameFont");
    this.addChild(label1_2);
    this.addChild(label1_1);
    this.addChild(label2_2);
    this.addChild(label2_1);
    this.addChild(label3_2);
    this.addChild(label3_1);

    // let story1 = "すたちゅーさんたちは";
    // let story2 = "どうやら きゃすけっとかいじょうへ";
    // let story3 = "むかっているようです。";

    let story1 = "すたちゅーさんたちは";
    let story2 = "  きゃすけっとかいじょうへ";
    let story3 = "    むかっているようです。";
    
    let anim = {};
    for (let i = 1; i <= story1.length; i++) {
      anim[i*10] = () => { let text = story1.substring(0, i); label1_1.text = text; label1_2.text = text; };
    }
    for (let i = 1; i <= story2.length; i++) {
      anim[i*10 + story1.length*10 + 30] = () => { let text = story2.substring(0, i); label2_1.text = text; label2_2.text = text; };
    }
    for (let i = 1; i <= story3.length; i++) {
      anim[i*10 + (story1.length + story2.length)*10 + 30] = () => { let text = story3.substring(0, i); label3_1.text = text; label3_2.text = text; };
    }
    this.tl.cue(anim);
    // this.tl.cue({
    //   10: () => { let text = story1.substring(0, 1); label1_1.text = text; label1_2.text = text; },
    //   20: () => { let text = story1.substring(0, 2); label1_1.text = text; label1_2.text = text; },
    //   30: () => { let text = story1.substring(0, 3); label1_1.text = text; label1_2.text = text; },
    //   40: () => { let text = story1.substring(0, 4); label1_1.text = text; label1_2.text = text; },
    //   50: () => { let text = story1.substring(0, 5); label1_1.text = text; label1_2.text = text; },
    //   60: () => { let text = story1.substring(0, 6); label1_1.text = text; label1_2.text = text; },
    //   70: () => { let text = story1.substring(0, 7); label1_1.text = text; label1_2.text = text; },
    //   80: () => { let text = story1.substring(0, 8); label1_1.text = text; label1_2.text = text; },
    //   90: () => { let text = story1.substring(0, 9); label1_1.text = text; label1_2.text = text; },
    //   100: () => { let text = story1.substring(0, 10); label1_1.text = text; label1_2.text = text; }
    // });
    // this.addChild(label12);
    // this.addChild(label2);
    // this.addChild(label3);
  }
}
