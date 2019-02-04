import { Component, OnInit, ViewChild } from '@angular/core';
import { zip } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Slide } from '@ionic/angular';

@Component({
  selector: 'app-jeux',
  templateUrl: 'jeux.page.html',
  styleUrls: ['jeux.page.scss']
})
export class JeuxPage implements OnInit {
  @ViewChild('ion-slide') private slide : Slide;
  
  Resp = {
    Q1Bool: "",
    Q1: null,
    Q2Bool: "",
    Q2: null,
    Q3Bool: "",
    Q3: null,
    Q4Bool: "",
    Q4: null,
    Q5Bool: "",
    Q5: null,
    Q6Bool: "",
    Q6: null,
    Q7Bool: "",
    Q7: null,
    Q8Bool: "",
    Q8: null,
    Q9Bool: "",
    Q9: null,
    Q10Bool: "",
    Q10: null,
    Q11Bool: "",
    Q11: null,
    Q12Bool: "",
    Q12: null,
    Q13Bool: "",
    Q13: null
  }
  ComptResultat = 0;
  
  constructor(    private storage: Storage) { }
  ngOnInit() {
  }
  option1 = {
    effect: 'flip'
  };

  Validation1(){
    console.log("aaaaaaaaaaaa");
    if(this.Resp.Q1 == 3 ){
      this.ComptResultat++;
      this.Resp.Q1Bool= " Félicitation, vous avez eu la bonne réponse !";
    }
    else{
      this.Resp.Q1Bool= " Faux, la bonne réponse est :  1L.";
    }
  }
    Validation2(){
    if(this.Resp.Q2 == 2 ){
      this.ComptResultat++;
      this.Resp.Q2Bool=" Félicitation, vous avez eu la bonne réponse ! Justification : L’eau apporté par les fruits et légumes ne suffit absolument pas à vous hydrater convenablement.";
    }
    else{
      this.Resp.Q2Bool=" Faux, la bonne réponse est : Non.   Justification : L’eau apporté par les fruits et légumes ne suffit absolument pas à vous hydrater convenablement.";
    }
  }
    Validation3(){
    if(this.Resp.Q3 == 2 ){
      this.ComptResultat++;
      this.Resp.Q3Bool=" Félicitation, vous avez eu la bonne réponse !   Justification : Boire régulièrement permet de maintenir ses performances. Pendant l’exercice physique, notre corps utilise la transpiration pour maintenir sa température à 37°C. Il faut donc compenser ses pertes en buvant de l’eau pour éviter la fatigue précoce. L’hydratation est capitale pour un sportif !";
    }
    else{
      this.Resp.Q3Bool=" Faux, la bonne réponse est : Faux.   Justification : Boire régulièrement permet de maintenir ses performances. Pendant l’exercice physique, notre corps utilise la transpiration pour maintenir sa température à 37°C. Il faut donc compenser ses pertes en buvant de l’eau pour éviter la fatigue précoce. L’hydratation est capitale pour un sportif !";
    }}
    Validation4(){
    if(this.Resp.Q4 == 2 ){
      this.ComptResultat++;
      this.Resp.Q4Bool= " Félicitation, vous avez eu la bonne réponse !  Justification : Les seniors doivent boire suffisamment, car leur sensation de soif est diminuée. Boire 1,5 l d’eau par jour permet une bonne hydratation et lutte efficacement contre les transits paresseux qui touchent un quart des personnes âgées";
    }else{
      this.Resp.Q4Bool= " Faux, la bonne réponse est : Faux.   Justification : Les seniors doivent boire suffisamment, car leur sensation de soif est diminuée. Boire 1,5 l d’eau par jour permet une bonne hydratation et lutte efficacement contre les transits paresseux qui touchent un quart des personnes âgées";
    }
  }
  Validation5(){
    if(this.Resp.Q5 == 4 ){
      this.ComptResultat++;
      this.Resp.Q5Bool= " Félicitation, vous avez eu la bonne réponse !   Justification : Bien que peu connus les sels minéraux et oligo-éléments sont indispensables au bon fonctionnement de l'organisme. Ils jouent un rôle de constitution, d'activation et de régulation des réactions enzymatiques, physiologiques hormonales et augmentent notre vitalité.   Les sels minéraux ne sont pas une source énergétique mais ils sont indispensables à la vie. Ils représentent 4% du poids d'un homme. On distingue, le sodium, le potassium, le calcium, le fer, le magnésium et le phosphore.   Les oligo-éléments sont des métaux ou des métalloïdes présents dans le corps humain en très faible quantité (oligo = peu en grec) mais de manière constante. Ils participent à la plupart des réactions chimiques (le fluor, le sélénium, le silicium)";
    }else{
      this.Resp.Q5Bool= " Faux, la bonne réponse est : Les sels minéraux.   Justification : Bien que peu connus les sels minéraux et oligo-éléments sont indispensables au bon fonctionnement de l'organisme. Ils jouent un rôle de constitution, d'activation et de régulation des réactions enzymatiques, physiologiques hormonales et augmentent notre vitalité.   Les sels minéraux ne sont pas une source énergétique mais ils sont indispensables à la vie. Ils représentent 4% du poids d'un homme. On distingue, le sodium, le potassium, le calcium, le fer, le magnésium et le phosphore.   Les oligo-éléments sont des métaux ou des métalloïdes présents dans le corps humain en très faible quantité (oligo = peu en grec) mais de manière constante. Ils participent à la plupart des réactions chimiques (le fluor, le sélénium, le silicium)";
    }}
    Validation6(){
    if(this.Resp.Q6 == 3 ){
      this.ComptResultat++;
      this.Resp.Q6Bool= " Félicitation, vous avez eu la bonne réponse !   Justification : L'intoxication à l'eau, également connue sous le nom d'hyperhydratation ou empoisonnement à l'eau, est un trouble des fonctions cérébrales potentiellement mortel, qui est la conséquence d'un déséquilibre des électrolytes provoqué par une surconsommation d'eau.";
    }
    else{
      this.Resp.Q6Bool= " Faux, la bonne réponse est : Lorsque la consommation en eau de l’individu dépasse le besoin en eau de son corps.   Justification : L'intoxication à l'eau, également connue sous le nom d'hyperhydratation ou empoisonnement à l'eau, est un trouble des fonctions cérébrales potentiellement mortel, qui est la conséquence d'un déséquilibre des électrolytes provoqué par une surconsommation d'eau.";
    }}
    Validation7(){
    if(this.Resp.Q7 == 2 ){
      this.ComptResultat++;
      this.Resp.Q7Bool= " Félicitation, vous avez eu la bonne réponse !  Justification : En effet la consommation en eau de chaque individu et propre à son poids, sa taille et ses activités sportives ou professionnelles.";
    }
    else{
      this.Resp.Q7Bool= " Faux, la bonne réponse est  : Votre poids, taille et vos activités sportives.   Justification : En effet la consommation en eau de chaque individu et propre à son poids, sa taille et ses activités sportives ou professionnelles.";
    }}
    Validation8(){

    if(this.Resp.Q8 == 3 ){
      this.ComptResultat++;
      this.Resp.Q8Bool= " Félicitation, vous avez eu la bonne réponse !  Justification : Plonger dans une eau fraîche demande de gros efforts, que le corps peut difficilement fournir quand la digestion à commencé. Il est donc possible de se baigner dans une eau plutôt chaude dès la fin du repas, à condition toutefois de ne pas avoir mangé d'aliments très lourds (donc longs à digérer).";
    }
    else{
      this.Resp.Q8Bool= " Faux, la bonne réponse est : Cela dépend surtout de la température de l´eau.   Justification : Plonger dans une eau fraîche demande de gros efforts, que le corps peut difficilement fournir quand la digestion à commencé. Il est donc possible de se baigner dans une eau plutôt chaude dès la fin du repas, à condition toutefois de ne pas avoir mangé d'aliments très lourds (donc longs à digérer).";
    }}
    Validation9(){
    if(this.Resp.Q9 == 1 ){
      this.ComptResultat++;
      this.Resp.Q9Bool= "Félicitation, vous avez eu la bonne réponse !   Justification : Le froid <congèle> les germes qui ne peuvent plus se multiplier. A la décongélation, les bactéries se réveillent et se développent à vive allure, créant (10x plus) de nouvelles bactéries qui -elles aussi- résistent au froid.";
    }else{
      this.Resp.Q9Bool= " Faux, la bonne réponse est : A cause du développement de bactéries.   Justification : Le froid <congèle> les germes qui ne peuvent plus se multiplier. A la décongélation, les bactéries se réveillent et se développent à vive allure, créant (10x plus) de nouvelles bactéries qui -elles aussi- résistent au froid.";
    }
  }
    Validation10(){
    if(this.Resp.Q10 == 3 ){
      this.ComptResultat++;
      this.Resp.Q10Bool= " Félicitation, vous avez eu la bonne réponse !   Justification : Pulvérisé sur le sol, 3% environ de pesticides sont absorbés par la plante. Le reste passe dans les particules du sol et descend -en partie- dans les eaux d'infiltration. A l'air libre, en aérosol, certaines particules peuvent aller jusqu'a 5000 km. L'usage facile et rapide des pesticides s'est développé depuis 1939, mais la persistance et l'intensité de son utilisation ont conduit de nombreuses espèces à devenir résistantes…";
    }
    else{
      this.Resp.Q10Bool= " Faux, la bonne réponse est : 1,5 Kg.   Justification : Pulvérisé sur le sol, 3% environ de pesticides sont absorbés par la plante. Le reste passe dans les particules du sol et descend -en partie- dans les eaux d'infiltration. A l'air libre, en aérosol, certaines particules peuvent aller jusqu'a 5000 km. L'usage facile et rapide des pesticides s'est développé depuis 1939, mais la persistance et l'intensité de son utilisation ont conduit de nombreuses espèces à devenir résistantes…";
    }}
    Validation11(){
    if(this.Resp.Q11 == 4 ){
      this.ComptResultat++;
      this.Resp.Q11Bool= "Félicitation, vous avez eu la bonne réponse !    Justification : Le corps humain est comme une petite planète d'un volume de 50 litres environ, recouverte d'une enveloppe de peau d'environ 2 m². A l'intérieur, des milliards de minuscules habitants grouillent et s'affairent dans tous les sens. On dit même qu'il y a plus de bactéries dans notre corps que de cellules ! La plupart des bactéries sont utiles à la santé, elles servent de défense naturelle, aident à la fabrication de vitamines, ou à la digestion par exemple (notre flore intestinale est plus exactement une faune). Plus la peine d'avoir le bourdon, la solitude ça n'existe pas.";
    }
    else{
      this.Resp.Q11Bool= " Faux, la bonne réponse est : Des milliards.    Justification : Le corps humain est comme une petite planète d'un volume de 50 litres environ, recouverte d'une enveloppe de peau d'environ 2 m². A l'intérieur, des milliards de minuscules habitants grouillent et s'affairent dans tous les sens. On dit même qu'il y a plus de bactéries dans notre corps que de cellules ! La plupart des bactéries sont utiles à la santé, elles servent de défense naturelle, aident à la fabrication de vitamines, ou à la digestion par exemple (notre flore intestinale est plus exactement une faune). Plus la peine d'avoir le bourdon, la solitude ça n'existe pas.";
    }
  }
    Validation12(){
    if(this.Resp.Q12 == 1 ){
      this.ComptResultat++;
      this.Resp.Q12Bool= " Félicitation, vous avez eu la bonne réponse !    Justification :  L'air contenu dans nos poumons est composé à 80% d'azote. Plus la pression augmente, plus un gaz (comme l'azote) se diffuse dans un liquide (loi de Henry).   Notre corps est composé à 65% d'eau. En cas de pression, l'azote contenu dans nos poumons se dissout dans notre corps et passe dans le sang (0,2 litre d'azote pour une pression de 1 bar, à la surface).   Le sang et les tissus des cellules contiennent alors du gaz. Il faut laisser le temps aux tissus de dissoudre à leur tour l'azote pour qu'il fasse le chemin inverse. La période de dissolution au retour est plus longue, elle doit s'effectuer par paliers. Le risque est de faire exploser le gaz contenu dans les tissus et le sang, sous forme de bulle (comme explose une canette de soda à l'ouverture).   Au travail, les gens sous pression le savent bien : pour éviter l'explosion, il vaut mieux prendre le temps de décompresser.";
    }else{
      this.Resp.Q12Bool= " Faux, la bonne réponse est : A cause de l´azote (principalement).    Justification :  L'air contenu dans nos poumons est composé à 80% d'azote. Plus la pression augmente, plus un gaz (comme l'azote) se diffuse dans un liquide (loi de Henry).   Notre corps est composé à 65% d'eau. En cas de pression, l'azote contenu dans nos poumons se dissout dans notre corps et passe dans le sang (0,2 litre d'azote pour une pression de 1 bar, à la surface).   Le sang et les tissus des cellules contiennent alors du gaz. Il faut laisser le temps aux tissus de dissoudre à leur tour l'azote pour qu'il fasse le chemin inverse. La période de dissolution au retour est plus longue, elle doit s'effectuer par paliers. Le risque est de faire exploser le gaz contenu dans les tissus et le sang, sous forme de bulle (comme explose une canette de soda à l'ouverture).   Au travail, les gens sous pression le savent bien : pour éviter l'explosion, il vaut mieux prendre le temps de décompresser.";
    }}
    Validation13(){
    if(this.Resp.Q13 == 1 ){
      this.ComptResultat++;
      this.Resp.Q13Bool= " Félicitation, vous avez eu la bonne réponse ! Crue, la pomme de terre contient une substance très toxique (la solanine) dont la concentration augmente avec l'exposition à la lumière (multipliée par 4 toutes les 24 heures à 16°C). Cette substance est facilement repérable grâce à la couleur verte de la peau.";
    }else{
      this.Resp.Q13Bool= " Faux, la bonne réponse est : Vrai. (si elles sont consommées crues). Crue, la pomme de terre contient une substance très toxique (la solanine) dont la concentration augmente avec l'exposition à la lumière (multipliée par 4 toutes les 24 heures à 16°C). Cette substance est facilement repérable grâce à la couleur verte de la peau.";
    }
    this.storage.set('score',this.ComptResultat);
  }
}
