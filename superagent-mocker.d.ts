import {SuperAgent} from "superagent";

declare module superagentMocker {
	interface Agent extends SuperAgent {
		timeout: number;
	}
}

declare module "superagent-mocker" {
	function mocker(agent: SuperAgent): superagentMocker.Agent;
	export = mocker;
}