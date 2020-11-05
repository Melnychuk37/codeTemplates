export const frontendTemplates = [
    {
        id: 1, 
        name: 'PlayForm.vue', 
        description: 'Пример который отрисовывает контейнерная компонента vue отображен справа. выпадающий список disabled пока не выбрана соответствующий тип розыграша (картинки подписанные \'Rush\', \'Pass\', \'Special Play\', являют собой кнопки, после нажатия которых идет снятия свойства disabled с выпадающего списка и <input/>\'ов снизу).',
        script: `<template>
    <div class="play-form">
        <PFYardsDownsModeration />
        <PFPlayersModeration />
        <PFPlayResCheckBoxModeration />
        <PFPlayPressureModeration />
        <PenaltyFlagModeration />
        <PFScorePointsModeration />
        <OLineSquadModeration />
        <PFSendPlayData />
    </div>
</template>
    
<script>
import PFPlayersModeration from './PFPlayersModeration.vue';
import PFPlayPressureModeration from './PFPlayPressureModeration.vue';
import OLineSquadModeration from './OLineSquadModeration.vue';
import PenaltyFlagModeration from './PenaltyFlagModeration.vue';
import PFScorePointsModeration from './PFScorePointsModeration.vue';
import PFPlayResCheckBoxModeration from './PFPlayResCheckBoxModeration.vue';
import PFYardsDownsModeration from './PFYardsDownsModeration.vue';
import PFSendPlayData from './PFSendPlayData.vue';
import { mapGetters, mapState } from 'vuex';
        
export default {
    name: 'PlayForm',
    async mounted() {
        await this.$store.dispatch('SET_PLAYERS');
        await this.$store.dispatch('SET_PLAYERS_ON_POSITIONS');
    },
    components: {
        OLineSquadModeration,
        PenaltyFlagModeration,
        PFScorePointsModeration,
        PFPlayResCheckBoxModeration,
        PFYardsDownsModeration,
        PFPlayersModeration,
        PFSendPlayData,
        PFPlayPressureModeration
    }        
}
</script>
    
<style scoped>
    ...`
    },
    {
        id: 2, 
        name: 'state (module для Play form component)', 
        description: 'Пример который отрисовывает контейнерная компонента vue отображен справа. выпадающий список disabled пока не выбрана соответствующий тип розыграша (картинки подписанные \'Rush\', \'Pass\', \'Special Play\', являют собой кнопки, после нажатия которых идет снятия свойства disabled с выпадающего списка и <input/>\'ов снизу).',
        script: `
import {stateDefault} from './defaultObjects/stateDefault';

const moduleMP = {
    state: () => ({
        moduleMP: {
            skilledPlayers: [],
            quaterbacks: [],
            olinePlayers: [],
            oLine: {
    ...
        }
    },
    getters: {
        GET_OLINE_PLAYERS: state => state.moduleMP.olinePlayers,
        GET_FLAG: state => state.moduleMP.flag,
        GET_SCORE_POINTS: state => state.moduleMP.scorePoints,
        GET_PLAY_RESULT: state => state.moduleMP.playRes,
        GET_OPPONENT_FLAG: state => state.moduleMP.isOppFlag,
        GET_PLAY_PRESSURE: state => state.moduleMP.playPressure,
        GET_YARDS_DOWNS: state => state.moduleMP.yardsDowns,
        GET_PLAY_TYPE_OPT: state => state.moduleMP.playTypeOpt,
        get_isFlag: state => state.moduleMP.flag.isFlag
    },
    mutations: {
        SET_OLINE_PLAYERS: (state, payload) => {
            state.moduleMP.olinePlayers = payload?.players?.filter(el => el.position == 'OL')
            .map(el => ({
                         _id: el._id, 
                    position: el.position, 
                      number: el.number, 
                    lastname: el.lastname,
                   firstname: el.firstname,
                    }))

            console.log(state.moduleMP.olinePlayers);
        },    
...`
    },
]
