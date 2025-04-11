<script>
	import Button from '$components/button/Button.svelte';
	import TextInput from '$components/input/TextInput.svelte';
	import { EnvelopeSimple, User, Moon, LinkedinLogo, GithubLogo } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
	
	let passwordVisible = false;
	let rememberMe = false;
</script>

<section>
	<SectionTitle
		sectionDesc="Welcome back! Please sign in to access your account."
		sectionTitle="Account Login">
		{#snippet children({ sectionIcon })}
			<Moon {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="auth-container">
		<form name="login" class="login-form" method="POST" action="https://formspree.io/f/xvgkwayk" >
			<TextInput 
				name="email" 
				label="Email address" 
				placeholder="name@company.com" 
				type="email"
				autocomplete="username"
			>
				{#snippet icon()}
					<EnvelopeSimple />
				{/snippet}
			</TextInput>

			<TextInput
				name="password"
				label="Password"
				placeholder="••••••••"
				type={passwordVisible ? 'text' : 'password'}
				autocomplete="current-password"
			>
				{#snippet icon()}
					<User />
				{/snippet}
				{#snippet rightIcon()}
					<button 
						type="button" 
						on:click={() => passwordVisible = !passwordVisible}
						class="password-toggle"
					>
						{#if passwordVisible}
							<Moon size={18} />
						{:else}
							<Moon size={18} />
						{/if}
					</button>
				{/snippet}
			</TextInput>

			<div class="form-options">
				<label class="remember-me">
					<input type="checkbox" bind:checked={rememberMe} />
					<span>Remember me</span>
				</label>
				<a href="/forgot-password" class="forgot-password">Forgot password?</a>
			</div>

			<Button
				fullWidth
				type="submit"
				backgroundColor="var(--color-primary)"
				glowColor="var(--color-primary)"
			>
				Sign In
			</Button>

			<div class="social-auth">
				<p class="divider">Or continue with</p>
				<div class="social-buttons">
					<Button variant="outline" fullWidth>
						<GoogleLogo size={20} />
						Google
					</Button>
					<Button variant="outline" fullWidth>
						<LinkedinLogo size={20} />
					LinkedIn 
					</Button>
				</div>
			</div>

			<p class="signup-link">
				Don&apos;t have an account? <a href="/signup">Create account</a>
			</p>
		</form>
	</div>
</section>

<style>
	.auth-container {
		max-width: 440px;
		margin: 0 auto;
		padding: 0 var(--space-mid);
	}

	.login-form {
		display: grid;
		gap: var(--space-mid);
		background: var(--color-bg-layout);
		padding: var(--space-xl);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
	}

	.password-toggle {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-secondary);
		padding: 4px;
	}

	.form-options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--text-sm);
	}

	.remember-me {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
	}

	.forgot-password {
		color: var(--color-primary);
		text-decoration: none;
	}

	.social-auth {
		display: grid;
		gap: var(--space-mid);
	}

	.divider {
		display: flex;
		align-items: center;
		gap: var(--space-mid);
		color: var(--color-text-secondary);
	}

	.divider::before,
	.divider::after {
		content: '';
		flex: 1;
		border-bottom: 1px solid var(--color-border);
	}

	.social-buttons {
		display: flex;
		gap: var(--space-mid);
	}

	.signup-link {
		text-align: center;
		color: var(--color-text-secondary);
	}

	.signup-link a {
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 500;
	}
</style>
