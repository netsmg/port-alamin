<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import ContactForm from '$components/auth/AuthForm.svelte';
	import SEO from '$components/seo/SEO.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Auth',
			slug: 'auth'
		}
	];

	const seoProps = {
		breadcrumbs,
		metadescription: 'Login or register.',
		slug: 'auth',
		title: 'Auth'
	};
</script>

<SEO {...seoProps} />

<PageTitle pageTitle="Auth" />

<ContactForm />
