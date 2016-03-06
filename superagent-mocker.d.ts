declare module superagentMocker {
	interface Agent extends superagent.Agent {
		timeout: number;
	}
}

declare module "superagent-mocker" {
	function mocker(agent: superagent.Agent): superagentMocker.Agent;
	export = mocker;
}
