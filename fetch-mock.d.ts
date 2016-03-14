declare namespace FetchMockModule {

	function mock(matcher: string, repsonse: any): void;

}


declare module "fetch-mock" {

	export = FetchMockModule;

}
