<script>
  export let title;
  export let kind;
  export let level;
  export let components;
  export let description;
</script>

<ion-card button="true">
  <ion-card-header>
    <ion-card-subtitle>{kind}</ion-card-subtitle>
    <ion-card-title>{title}</ion-card-title>
    LVL 0
  </ion-card-header>
  <ion-card-content>
    {description}
  </ion-card-content>
</ion-card>
